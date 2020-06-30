
import React from 'react';
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
import References from '../components/FormEdition/References';
import Tags from '../components/FormEdition/Tags';
import InfosPro from '../components/FormEdition/InfosPro';
import EditionContext from '../components/FormEdition/EditionContext';
import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from '../components/stylesMatUi';

class EditionContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      // données BDD freelance
      url_photo: '',
      phone_number: '',
      average_daily_rate: 0,
      url_web_site: '',
      job_title: '',
      bio: '',
      vat_number: '',
      last_modification_date: '2019-03-15',
      is_active: 1,
      address_id: '',
      email: '', // présent dans le wireframe mais dans aucune BDD

      street: '',
      zip_code: '',
      city: '',
      // References
      project_name: [],
      //Tag
      tag_name: [],
    };
  }

  handleAdressFormChange = (e) => {
    const targetProp = e.target.name.toLowerCase();
    this.setState({ ...this.state, [targetProp]: e.target.value })
  }

  handleReferencesName = (items) => {
    this.setState({ project_name: items })
  }
  handleTag = (e) => {
    const newtagName = this.state.tag_name;
    if (!e.target.innerText) {
      newtagName.pop()
      this.setState({ tag_name: newtagName })
    } else {
      newtagName.push(e.target.innerText)
      this.setState({ tag_name: newtagName })
    }
  }

  render() {
    return (
      <div>
        <EditionContext.Provider value={{ ...this.state, handleAdressFormChange: this.handleAdressFormChange, handleReferencesName: this.handleReferencesName, handleTag: this.handleTag }}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  };
}


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Informations', 'Références', 'Compétences','Infos Personnelles'];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <References />;
    case 2:
      return <Tags />;
    case 3:
      return <InfosPro />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Edition(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
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
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Vos informations ont bien été prises en compte
                </Typography>
              </React.Fragment>
            ) : (
                <EditionContextProvider>
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        name="enregistrer"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Enregistrer' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                </EditionContextProvider>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
