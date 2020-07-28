import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
import { Helmet } from 'react-helmet';
import { isFrenchMobile, isValidURL } from '../functionshelper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AuthContext from '../components/AuthContext';
import '../components/FormEdition/ImageCropInput.css'

const title = 'Edition de compte';

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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { setFreelanceId, freelanceId, errorModalMessage, modalOpen, showErrorMessage, closeModal, freelanceExists, firstname, lastname, email, url_photo, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city, references, chosenTags, sendFlDatasToFormEdition } = useContext(EditionContext);
  const payload = { firstname, lastname, email, url_photo, phone_number, average_daily_rate, url_web_site, job_title, bio, vat_number, last_modification_date, is_active, street, zip_code, city, references, chosenTags };
  const { user } = useContext(AuthContext);
  const isConnected = !!useContext(AuthContext).token;


  const retrieveAccountInformations = () => {
    API.get('/freelances/account')
      .then(res => res.data)
      .then(data => {
        sendFlDatasToFormEdition(data);
      });
  };

  useEffect(() => {
    retrieveAccountInformations();
  }, []);

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    if (e.target.innerText.toLowerCase() === 'enregistrer') {
      const url = process.env.REACT_APP_API_URL + '/freelances/account';
      if (freelanceExists) {
        API.patch(url, payload)
          .then((res) => {
          })
          .catch(err => {
            console.error('error Parch FL', err);
          });
      } else {
        API.post(url, payload)
          .then((res) => {
            console.log(res.data.data)
            setFreelanceId(res.data.dataFreelance.id);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
    if ((e.target.innerText.toLowerCase() === 'suivant') && activeStep === 1) {
      if (!isFrenchMobile(phone_number) && phone_number) {
        showErrorMessage('Merci de rentrer un numéro de téléphone valide');
        setActiveStep(activeStep);
      }
    }
    if ((e.target.innerText.toLowerCase() === 'suivant') && activeStep === 1) {
      if (!isValidURL(url_web_site) && url_web_site) {
        showErrorMessage('Merci de rentrer un url valide');
        setActiveStep(activeStep);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (e) => {
    const stepperClicked = e.target.textContent;

    for (let i = 0; i < steps.length; i++) {
      if (stepperClicked == steps[i]) {
        if (activeStep !== i) {
          setActiveStep(i);
        }
      }
    }
  }

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper} >
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel style={{ cursor: "pointer" }} onClick={handleStep}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant='h5' gutterBottom>
                  Vos informations ont bien été prises en compte
                </Typography>
                {(isConnected && (user.freelance_id || freelanceId)) && <Button style={{textDecoration: 'none', backgroundColor: 'var(--green)' }}  variant='contained' color='primary' component='span' className={classes.button}><Link style={{textDecoration: 'none', color: 'white'}}  to={user.freelance_id ? `/detail/${user.freelance_id}` : `/detail/${freelanceId}`}>Mon Compte</Link></Button>}
              </>

            ) : (
              <>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                <Dialog
                  fullScreen={fullScreen}
                  open={modalOpen}
                  onClose={closeModal}
                  aria-labelledby='responsive-dialog-title'
                >
                  <DialogTitle id='responsive-dialog-title'>Problème de saisie</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {errorModalMessage}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeModal} color='primary' autoFocus>
                      Fermer
                    </Button>
                  </DialogActions>
                </Dialog>
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