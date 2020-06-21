import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Label, CustomInput  } from 'reactstrap';

import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import '../styles/Edition.css';
import '../components/PasswordModal';

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

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
            <Form.Label>Mot de passe actuel</Form.Label>
            <Form.Control type='currentpassword' placeholder='********' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type='newpassword' placeholder='' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
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
  return (
    <div className='edition'>
      <Form>
        {/* <Form.Row> */}
        <h2>Informations</h2>
        <Form.Group as={Col} controlId='formGridfirstname'>
          <Form.Label>Prénom</Form.Label>
          <Form.Control type='prenom' placeholder='John' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridlastname'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='nom' placeholder='Doe' />
        </Form.Group>
        {/* </Form.Row> */}

        {/* <h2>Photo de profil</h2> */}
        <FormGroup controlId='formGridpicture' className='profilpic '>
          <Label  for="exampleCustomFileBrowser">Photo de profil</Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>
{/* 
        <h2>Votre biographie</h2> */}
        <Form.Group as={Col} controlId='exampleForm.ControlTextearea1'>
          <Form.Label>Biographie</Form.Label>
          <Form.Control as='textarea' rows='3' />
        </Form.Group>

        <h2>Références</h2>
        <Form.Group as={Col} controlId='formGridprojectName'>
          <Form.Label>Nom du projet / client</Form.Label>
          <Form.Control type='projet' placeholder='projet' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridprojectUrl'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='url_projet' placeholder='url du projet' />
        </Form.Group>

        <h2>Compétences</h2>
        <Form.Group as={Col} controlId='formGridAddress1'>
          <Form.Label>Compétences</Form.Label>
          <Form.Control placeholder='compétenes autocomplétion à implémenter' />
        </Form.Group>

        <h2>Informations complémentaires</h2>
        <Form.Group as={Col} controlId='formGridproemail'>
          <Form.Label>Adresse e-mail professionnelle</Form.Label>
          <Form.Control type='emailpro' placeholder='jdoe@doej.com' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridcompanyname'>
          <Form.Label>Nom de l’entreprise</Form.Label>
          <Form.Control type='companyname' placeholder='Redbull' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridurlpro'>
          <Form.Label>URL Site web professionel</Form.Label>
          <Form.Control type='companyurl' placeholder='jdoe.com' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridphonenum'>
          <Form.Label>Téléphone professionnel</Form.Label>
          <Form.Control type='phonenumber' placeholder='123884440' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridactivity'>
          <Form.Label>Domaine d’activité</Form.Label>
          <Form.Control type='activity' placeholder='energy drink' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridsiret'>
          <Form.Label>SIRET</Form.Label>
          <Form.Control type='siret' placeholder='123453' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridtva'>
          <Form.Label>TVA</Form.Label>
          <Form.Control type='tva' placeholder='1234567187633eedede' />
        </Form.Group>


        {/*
        <Form.Group as={Col} controlId="formBasicCurrentPassword">
          <Form.Label>Mot de passe actuel</Form.Label>
          <Form.Control type="currentpassword" placeholder="mot de passe actuel" />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicCurrentPassword">
          <Form.Label>Nouveau mot de passe</Form.Label>
          <Form.Control type="newpassword" placeholder="nouveau mot de passe" />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicCurrentPassword">
          <Form.Label>Confirmer mot de passe</Form.Label>
          <Form.Control type="newpasswordconfirmed" placeholder="confirmer mot de passe" />
        </Form.Group> */}
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
