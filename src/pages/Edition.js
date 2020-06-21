import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Label, CustomInput  } from 'reactstrap';
import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import '../styles/Edition.css';
import '../components/PasswordModal';
import axios from 'axios';

function PasswordModal(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className='close' style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color='primary' onClick={toggle}><h3>Changer de mot de passe</h3></Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Changement de mot de passe</ModalHeader>
        <ModalBody>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Mot de passe actuel</Form.Label>
            <Form.Control type='currentpassword' placeholder='********' />
          </Form.Group>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type='newpassword' placeholder='' />
          </Form.Group>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Confirmer mot de passe</Form.Label>
            <Form.Control type='newpasswordconfirmed' placeholder='' />
          </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>Confirmer</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


function Edition(props) {

  const [infosEdition, setInfosEdition] = useState({
    firstname: 'John',
    lastname: 'Doe',
    //données BDD freelance
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

    projet_name:'',
    emailpro:'',// présent dans le wireframe mais dans aucune BDD
    company_name: ''// idem mail pro
  })

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(infosEdition)
    const url = 'http://localhost:3000/freelance';
      axios
        .post(url, infosEdition)
        .then(res => res.data)
        .then(function () {
          console.log('Your movie has been added !');
        })
        .catch(error => {
          console.log(error);
        });
  };


  return (
    <div className='edition'>
      <Form onSubmit = {handlesubmit}>
        {/* <Form.Row> */}
        <h2>Informations</h2>
        <Form.Group as={Col}  controlid='formGridfirstname' >
          <Form.Label>Prénom</Form.Label>
          <Form.Control id='e' type='firstname' placeholder='John' onChange={(e) => setInfosEdition({ ...infosEdition, firstname: e.target.value })}
        value={infosEdition.firstname}/>
        </Form.Group>

        <Form.Group as={Col} controlid='formGridlastname' classname='e'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='lastname' placeholder='Doe' onChange={(e) => setInfosEdition({ ...infosEdition, lastname: e.target.value })}
        value={infosEdition.lastname} />
        </Form.Group>
        {/* </Form.Row> */}

        {/* <h2>Photo de profil</h2> */}
        <Form.Group as={Col} controlid='formGridurl_photo' >
          <Form.Label>Url photo</Form.Label>
          <Form.Control type='url_photo'  placeholder='url_photo' onChange={(e) => setInfosEdition({ ...infosEdition, url_photo: e.target.value })}
        value={infosEdition.url_photo}/>
        </Form.Group>
        <FormGroup controlid='formGridpicture' className='profilpic' >
          <Label  for="exampleCustomFileBrowser">Photo de profil</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile"  />
        </FormGroup>
{/* 
        <h2>Votre biographie</h2> */}
        <Form.Group as={Col} controlid='exampleForm.ControlTextearea1' >
          <Form.Label>Biographie</Form.Label>
          <Form.Control as='textarea' rows='3' onChange={(e) => setInfosEdition({ ...infosEdition, bio: e.target.value })}
        value={infosEdition.bio}/>
        </Form.Group>

        <Form.Group as={Col} controlid='formGridavgdailyrate' >
          <Form.Label>TJM</Form.Label>
          <Form.Control type='average_daily_rate' placeholder='TJM'  onChange={(e) => setInfosEdition({ ...infosEdition, average_daily_rate: e.target.value })}
        value={infosEdition.average_daily_rate}/>
        </Form.Group>

        <h2>Références</h2>
        <Form.Group as={Col} controlid='formGridprojectName'>
          <Form.Label>Nom du projet / client</Form.Label>
          <Form.Control type='projet' placeholder='projet' />
        </Form.Group>
        <Form.Group as={Col} controlid='formGridprojectUrl'>
          <Form.Label>Url du projet</Form.Label>
          <Form.Control type='project_name' placeholder='url du projet' onChange={(e) => setInfosEdition({ ...infosEdition, projet_name: e.target.value })}
        value={infosEdition.projet_name}/>
        </Form.Group>
        <Form.Group as={Col} controlid='formGridlastname' >
          <Form.Label>Url photo</Form.Label>
          <Form.Control type='url_photo' placeholder='url_photo' onChange={(e) => setInfosEdition({ ...infosEdition, url_photo: e.target.value })}
        value={infosEdition.url_photo}/>
        </Form.Group>
        <FormGroup controlid='formGridpicture' className='profilpic' >
          <Label  for="exampleCustomFileBrowser">Photo du projet</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>
        

        <h2>Compétences</h2>
        <Form.Group as={Col} controlid='formGridskills'>
          <Form.Label>Compétences</Form.Label>
          <Form.Control placeholder='compétenes autocomplétion à implémenter' />
        </Form.Group>

        <h2>Informations complémentaires</h2>
        <Form.Group as={Col} controlid='formGridproemail'>
          <Form.Label>Adresse e-mail professionnelle</Form.Label>
          <Form.Control type='emailpro' placeholder='jdoe@doej.com' onChange={(e) => setInfosEdition({ ...infosEdition, emailpro: e.target.value })}
        value={infosEdition.emailpro} />
        </Form.Group>
        <Form.Group as={Col} controlid='formGridcompanyname'>
          <Form.Label>Nom de l’entreprise</Form.Label>
          <Form.Control type='company_name' placeholder='Redbull' onChange={(e) => setInfosEdition({ ...infosEdition, company_name: e.target.value })}
        value={infosEdition.company_name}/>
        </Form.Group>
        <Form.Group as={Col} controlid='formGridurlpro'>
          <Form.Label>URL Site web professionel</Form.Label>
          <Form.Control type='companyurl' placeholder='jdoe.com' onChange={(e) => setInfosEdition({ ...infosEdition, url_web_site: e.target.value })} value={infosEdition.url_web_site}/>
        </Form.Group>
        <Form.Group as={Col} controlid='formGridphonenum'>
          <Form.Label>Téléphone professionnel</Form.Label>
          <Form.Control type='phone_number' placeholder='123884440' onChange={(e) => setInfosEdition({ ...infosEdition, phone_number: e.target.value })} value={infosEdition.phone_number}/>
        </Form.Group>

        <Form.Group as={Col} controlid='formGridactivity'>
          <Form.Label>Domaine d’activité</Form.Label>
          <Form.Control type='activity' placeholder='energy drink' onChange={(e) => setInfosEdition({ ...infosEdition, activity: e.target.value })} value={infosEdition.activity} />
        </Form.Group>

        <Form.Group as={Col} controlid='formGridsiret'>
          <Form.Label>SIRET</Form.Label>
          <Form.Control type='siret' placeholder='123453' onChange={(e) => setInfosEdition({ ...infosEdition, siret: e.target.value })} value={infosEdition.siret}/>
        </Form.Group>

        <Form.Group as={Col} controlid='formGridtva'>
          <Form.Label>TVA</Form.Label>
          <Form.Control type='vat_number' placeholder='1234567187633eedede' onChange={(e) => setInfosEdition({ ...infosEdition, vat_number: e.target.value })} value={infosEdition.vat_number}/>
        </Form.Group>

        <Form.Group as={Col} id='formGridPasswordModal'>
          <PasswordModal />
        </Form.Group>

          {/* <Form.Group as={Col} id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Prise en compte des mentions légales' />
          </Form.Group>  */}

        <Button color='danger' type='submit'>
          Submit
        </Button>

      </Form>
    </div>

  );
}

export default Edition;
