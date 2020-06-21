import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import '../styles/Edition.css';
import '../components/PasswordModal';

function PasswordModal (props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className='close' style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color='danger' onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
            <Form.Label>Mot de passe actuel</Form.Label>
            <Form.Control type='currentpassword' placeholder='mot de passe actuel' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type='newpassword' placeholder='nouveau mot de passe' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicCurrentPassword'>
            <Form.Label>Confirmer mot de passe</Form.Label>
            <Form.Control type='newpasswordconfirmed' placeholder='confirmer mot de passe' />
          </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>Do Something</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function Edition (props) {
  return (
    <div className='edition'>
      <Form>
        {/* <Form.Row> */}
        <h2>Vos informations</h2>
        <Form.Group as={Col} controlId='formGridfirstname'>
          <Form.Label>Prénom</Form.Label>
          <Form.Control type='prenom' placeholder='John' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridlastname'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='nom' placeholder='Doe' />
        </Form.Group>
        {/* </Form.Row> */}

        <h2>Votre photo</h2>
        <div class='form-group'>
          <label for='exampleFormControlFile1'>Télécharger votre photo de profil</label>
          <input type='file' class='form-control-file  text-center' id='exampleFormControlFile1' />
        </div>

        <h2>Votre biographie</h2>
        <Form.Group as={Col} controlId='exampleForm.ControlTextearea1'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows='3' />
        </Form.Group>

        <h2>Votre références</h2>
        <Form.Group as={Col} controlId='formGridprojectName'>
          <Form.Label>Nom du projet / client</Form.Label>
          <Form.Control type='projet' placeholder='projet' />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridprojectUrl'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='url_projet' placeholder='url du projet' />
        </Form.Group>

        <h2>Vos compétences</h2>
        <Form.Group as={Col} controlId='formGridAddress1'>
          <Form.Label>Compétences</Form.Label>
          <Form.Control placeholder='compétenes autocomplétion à implémenter' />
        </Form.Group>

        <h2>Votre informations de Freelance</h2>
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

        <h2>Changer de mot de passe</h2>
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

        <Form.Group as={Col} id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>

      </Form>
    </div>

  );
}

export default Edition;
