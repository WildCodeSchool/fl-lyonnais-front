import React, { useContext, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../components/FormEdition/AddressForm';
import References from '../components/FormEdition/References/References';
import Tags from '../components/FormEdition/Tags';
import InfosPro from '../components/FormEdition/InfosPro';
import EditionContext from '../components/FormEdition/EditionContext';
import API from '../API';
import useStyles from '../components/FormEdition/useStyles';

//deux clé fl et user
// fl 0 si pas de compte éditer,

const steps = ['Personnel', 'Entreprise', 'Compétences', 'Références'];
function getStepContent(step, propsToPass) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <InfosPro />;
    case 2:
      return <Tags />;
    case 3:
      return <References />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Edition(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { freelanceExists, firstname, lastname, email, url_photo, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city,
    references, chosenTags, sendFlDatasToFormEdition } = useContext(EditionContext);

  const formData = new FormData();
  let { image } = references[0] ? references[0] : {}
  formData.append('title', 'titre');
  formData.append("image", image);

  // console.log('ref à envoyer sans image', referencesToSend);
  // console.log(formData) 

  // let imagesArrayToSend = []
  // for (let i=0; i<= references.length; i++) {
  //   if (references[i]) {
  //     imagesArrayToSend.push(references[i].image)
  //     delete references[i].image
  //   }
  // }
  // console.log(imagesArrayToSend)

  let payload = { firstname, lastname, email, url_photo, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city, references, chosenTags };



  const retrieveAccountInformations = () => {
    API.get('/freelances/account')
      .then(res => res.data)
      .then(data => {
        sendFlDatasToFormEdition(data);
      });
  };

  useEffect(() => {
    retrieveAccountInformations()
  }, [])

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    if (e.target.innerText.toLowerCase() === 'enregistrer') {
      const url = process.env.REACT_APP_API_URL + '/freelances/account';

      if (freelanceExists) {

        API.put(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
          .then(() => alert('Succes'))
          .catch(err => {
            console.error(err);
          });
        API.put(url, payload)
          .then((res) => res.data)
          .then(data => {
            alert('Informations modifiées')
          })
          .catch(err => {
            alert('Erreur upload')
            console.error(err);
          });
        //image

      }

      else {
        API.post(url, payload)
          .then((res) => res.data)
          .then(data =>
            alert('Informations enregistrées')
          )
          .catch(err => {
            console.error(err);
          });
      }
    }
  };



  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <h1>Gestion de votre compte</h1>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant='h5' gutterBottom>
                  Vos informations ont bien été prises en compte
                </Typography>
              </>
            ) : (
                <>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Retour
                      </Button>
                    )}
                    <Button
                      variant='contained'
                      name='enregistrer'
                      color='primary'
                      onClick={handleNext}
                      className={classes.button}
                      style={{ backgroundColor: 'var(--red)' }}
                    >
                      {activeStep === steps.length - 1 ? 'Enregistrer' : 'Suivant'}
                    </Button>
                  </div>
                </>
              )}
          </>
        </Paper>
      </main>
    </>
  );
}
