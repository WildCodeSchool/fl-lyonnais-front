
import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
// import { makeStyles } from '@material-ui/core/styles';
import EditionContext from '../components/FormEdition/EditionContext';
import API from '../API';
import { isFrenchMobile } from '../functionshelper';
import useStyles from '../components/FormEdition/useStyles'


const steps = ['Informations(1/2)', 'Informations(2/2)', 'Compétences', 'Références'];
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

    const payload = useContext(EditionContext);
    const handleNext = (e) => {
      setActiveStep(activeStep + 1);
      if (e.target.innerText.toLowerCase() === 'suivant') {
        payload.cleanProjectState();
      }

      if (e.target.innerText.toLowerCase() === 'enregistrer') {

        console.log(payload);
        API.post('http://localhost:3000/freelances/account', payload).then((res) => {
          // history.push('/');
          // alert('Informations enregistrées vous allez être redirigés vers votre fiche de détail');
        })
      };
    };


    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    return (
      <>
        <CssBaseline />
        <AppBar position='absolute' color='default' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              Gestion de votre compte
          </Typography>
          </Toolbar>
        </AppBar>
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
