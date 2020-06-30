
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
import EditionContext from '../components/FormEdition/EditionContext'
import {useStyles} from '../components/stylesMatUi';

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
    // const projetName = this.state.project_name.slice()
    // projetName.push(item).flat([Infinity])
    this.setState({project_name: items})
  }
  handleTag = (e) => {
    const newtagName = this.state.tag_name;
    if (!e.target.innerText) {
      newtagName.pop()
      this.setState({tag_name: newtagName })
    } else {
      newtagName.push(e.target.innerText)
      this.setState({tag_name: newtagName })
    }
  }

  render() {
    return (
      <div>
        <EditionContext.Provider value={{ ...this.state, handleAdressFormChange: this.handleAdressFormChange, handleReferencesName:this.handleReferencesName, handleTag:this.handleTag}}>
          {this.props.children}
        </EditionContext.Provider>
      </div>
    );
  };
}

const steps = ['Informations', 'Références', 'Compétences', 'Professionnelles'];


export default function Edition(props) {
  const classes = useStyles();
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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    // if (e.target.innerText.toLowerCase() === 'enregistrer') {
    //   alert('yeaaaaaaaaaaaaaaaa')
    // }
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













// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// // import { Button } from 'react-bootstrap';
// // import { Form } from 'react-bootstrap'
// import { Col } from 'react-bootstrap';
// import '../styles/Edition.scss';
// import '../components/PasswordModal';
// import axios from 'axios';
// import { isSiret } from '../functionshelper';




// function Edition (props) {
//   const [infosEdition, setInfosEdition] = useState({
//     firstname: 'John',
//     lastname: 'Doe',
//     // données BDD freelance
//     url_photo: '',
//     phone_number: '',
//     average_daily_rate: 0,
//     url_web_site: '',
//     job_title: '',
//     bio: '',
//     vat_number: '',
//     last_modification_date: '2019-03-15',
//     is_active: 1,
//     address_id: '',

//     projet_name: '',
//     emailpro: '', // présent dans le wireframe mais dans aucune BDD

//     street: '',
//     zip_code: '',
//     city: ''
//   });

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(infosEdition);
//     console.log(isSiret('1234567891123A'));
//     const url = 'http://localhost:3000/freelance';
//     axios
//       .post(url, infosEdition)
//       .then(res => res.data)
//       .then(function () {
//         console.log('Your movie has been added !');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className='edition'>
//       <Form onSubmit={handlesubmit}>

//         {/* <Form.Row> */}
//         <h2>Informations</h2>
//         <Form.Group as={Col} controlid='formGridfirstname'>
//           <Form.Label>Prénom</Form.Label>
//           <Form.Control
//             id='e' type='firstname' placeholder='John' onChange={(e) => setInfosEdition({ ...infosEdition, firstname: e.target.value })}
//             value={infosEdition.firstname}
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridlastname'>
//           <Form.Label>Nom</Form.Label>
//           <Form.Control
//             type='lastname' placeholder='Doe' onChange={(e) => setInfosEdition({ ...infosEdition, lastname: e.target.value })}
//             value={infosEdition.lastname}
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridactivity'>
//           <Form.Label>Titre</Form.Label>
//           <Form.Control type='job_title' placeholder='titre' onChange={(e) => setInfosEdition({ ...infosEdition, job_title: e.target.value })} value={infosEdition.job_title} />
//         </Form.Group>
//         {/* </Form.Row>

//         {/* <h2>Photo de profil</h2> */}

//         <Form.Group controlid='formGridpicture' className='profilpic'>
//           <Label for='exampleCustomFileBrowser'>Photo de profil</Label>
//           <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
//         </Form.Group>
//         {/*
//         <h2>Votre biographie</h2> */}
//         <Form.Group as={Col} controlid='exampleForm.ControlTextearea1'>
//           <Form.Label>Biographie</Form.Label>
//           <Form.Control
//             as='textarea' rows='3' onChange={(e) => setInfosEdition({ ...infosEdition, bio: e.target.value })}
//             value={infosEdition.bio}
//           />
//         </Form.Group>
//         /
//         <Form.Group as={Col} controlid='formGridavgdailyrate'>
//           <Form.Label>TJM</Form.Label>
//           <Form.Control
//             type='average_daily_rate' placeholder='TJM' onChange={(e) => setInfosEdition({ ...infosEdition, average_daily_rate: e.target.value })}
//             value={infosEdition.average_daily_rate}
//           />
//         </Form.Group>

//         <h2>Références</h2>
//         <Form.Group as={Col} controlid='formGridprojectName'>
//           <Form.Label>Nom du projet / client</Form.Label>
//           <Form.Control type='projet' placeholder='projet' />
//         </Form.Group>
//         <Form.Group as={Col} controlid='formGridprojectUrl'>
//           <Form.Label>Url du projet</Form.Label>
//           <Form.Control
//             type='project_name' placeholder='url du projet' onChange={(e) => setInfosEdition({ ...infosEdition, projet_name: e.target.value })}
//             value={infosEdition.projet_name}
//           />
//         </Form.Group>
//         <FormGroup controlid='formGridpicture' className='profilpic'>
//           <Label for='exampleCustomFileBrowser'>Photo du projet</Label>
//           <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
//         </FormGroup>

//         <h2>Compétences</h2>
//         <Form.Group as={Col} controlid='formGridskills'>
//           <Form.Label>Compétences</Form.Label>
//           <Form.Control placeholder='Compétences principales' />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridskills'>
//           <Form.Label>Compétences</Form.Label>
//           <Form.Control placeholder='Compétences secondaires' />
//         </Form.Group>

//         <h2>Informations complémentaires</h2>
//         <Form.Group as={Col} controlid='formGridproemail'>
//           <Form.Label>Adresse e-mail professionnelle</Form.Label>
//           <Form.Control
//             type='emailpro' placeholder='jdoe@doej.com' onChange={(e) => setInfosEdition({ ...infosEdition, emailpro: e.target.value })}
//             value={infosEdition.emailpro}
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridstreet'>
//           <Form.Label>Rue</Form.Label>
//           <Form.Control
//             type='street' placeholder='nom de la rue' onChange={(e) => setInfosEdition({ ...infosEdition, street: e.target.value })}
//             value={infosEdition.street}
//           />
//         </Form.Group>
//         <Form.Group as={Col} controlid='formGridzip_code'>
//           <Form.Label>Code postal</Form.Label>
//           <Form.Control
//             type='zip_code' placeholder='code postal' onChange={(e) => setInfosEdition({ ...infosEdition, zip_code: e.target.value })}
//             value={infosEdition.zip_code}
//           />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridzipville'>
//           <Form.Label>Ville</Form.Label>
//           <Form.Control
//             type='city' placeholder='ville' onChange={(e) => setInfosEdition({ ...infosEdition, city: e.target.value })}
//             value={infosEdition.city}
//           />
//         </Form.Group>

//         {/* <Form.Group as={Col} controlid='formGridcompanyname'>
//           <Form.Label>Nom de l’entreprise</Form.Label>
//           <Form.Control type='company_name' placeholder='Redbull' onChange={(e) => setInfosEdition({ ...infosEdition, company_name: e.target.value })}
//         value={infosEdition.company_name}/>
//         </Form.Group> */}
//         <Form.Group as={Col} controlid='formGridurlpro'>
//           <Form.Label>URL Site web professionel</Form.Label>
//           <Form.Control type='companyurl' placeholder='jdoe.com' onChange={(e) => setInfosEdition({ ...infosEdition, url_web_site: e.target.value })} value={infosEdition.url_web_site} />
//         </Form.Group>
//         <Form.Group as={Col} controlid='formGridphonenum'>
//           <Form.Label>Téléphone professionnel</Form.Label>
//           <Form.Control type='phone_number' placeholder='123884440' onChange={(e) => setInfosEdition({ ...infosEdition, phone_number: e.target.value })} value={infosEdition.phone_number} />
//         </Form.Group>

//         {/* <Form.Group as={Col} controlid='formGridactivity'>
//           <Form.Label>Domaine d’activité</Form.Label>
//           <Form.Control type='activity' placeholder='energy drink' onChange={(e) => setInfosEdition({ ...infosEdition, activity: e.target.value })} value={infosEdition.activity} />
//         </Form.Group> */}

//         <Form.Group as={Col} controlid='formGridsiret'>
//           <Form.Label>SIRET</Form.Label>
//           <Form.Control type='siret' placeholder='123453' onChange={(e) => setInfosEdition({ ...infosEdition, siret: e.target.value })} value={infosEdition.siret} />
//         </Form.Group>

//         <Form.Group as={Col} controlid='formGridtva'>
//           <Form.Label>TVA</Form.Label>
//           <Form.Control type='vat_number' placeholder='1234567187633eedede' onChange={(e) => setInfosEdition({ ...infosEdition, vat_number: e.target.value })} value={infosEdition.vat_number} />
//         </Form.Group>

//         <Form.Group as={Col} id='formGridPasswordModal'>
//           <PasswordModal />
//         </Form.Group>

//         {/* <Form.Group as={Col} id='formGridCheckbox'>
//             <Form.Check type='checkbox' label='Prise en compte des mentions légales' />
//           </Form.Group>  */}

//         <Button color='danger' type='submit'>
//           Enregistrer
//         </Button>

//       </Form>
//     </div>

//   );
// }

// export default Edition;
