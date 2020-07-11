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
function getStepContent (step, propsToPass) {
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

export default function Edition (props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { freelanceExists, firstname, lastname, email, url_photo, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city, references, chosenTags, sendFlDatasToFormEdition } = useContext(EditionContext);
  const payload = { firstname, lastname, email, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city, references, chosenTags };

  const retrieveAccountInformations = () => {
    API.get('/freelances/account')
      .then(res => res.data)
      .then(data => {
        console.log(data);
        sendFlDatasToFormEdition(data);
      });
  };

  useEffect( () => {
    retrieveAccountInformations()
  }, [] )

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    if (e.target.innerText.toLowerCase() === 'enregistrer') {
      const url = process.env.REACT_APP_API_URL + '/freelances/account';
      console.log(payload);
      const formData = new FormData();
      const image = url_photo;
      console.log(image)
      formData.append('title', 'titre');
      formData.append("image", image);
      
      if (freelanceExists) {
        API.patch(url, payload)
        .then((res) => res.data)
        .then(data =>
          alert('Informations modifiées')
        )
        .catch(err => {
          console.error('error Parch FL',err);
        });
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
    //  En attente Pierre pour upload photo
    // handleFile = (e) => {
    //   const imageReferenceListAdded = this.state.imageReferenceList;
    //   imageReferenceListAdded.push(e)
    //   this.setState( {imageReferenceList: imageReferenceListAdded})
    //   console.log(this.state.imageReferenceList)
    //   // axios.post('/posts', formData, {
    //   //     headers: {
    //   //       'Content-Type': 'multipart/form-data'
    //   //     }
    // }

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