import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import axios from 'axios';

class Registration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      freelance: '',
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  /*
    handleSubmitForm (e) {
      e.preventDefault();
      const url = '';
      axios
        .post(url, this.state)
        .then(res => res.data)
        .then(res => {
          alert(`Fiche  "${res.freelance}" ajouté !`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur lors de l'ajout de la fiche : ${e.message}`);
        });
    }
   */

  render () {
    return (
      <div className='FicheForm'>
        <h1>Inscription </h1>

        <p> Présentation du concept de l'annuaire avec un paragraphe </p>

        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <legend>Créer mon compte de Freelance à Lyon: </legend>

            <div className='FicheForm'>
              <label htmlFor='FicheForm'>Nom: </label>
              <input
                type='text'
                id='freelanceFirstname'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='FicheForm'>Prénom: </label>
              <input
                type='text'
                id='freelanceName'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='FicheForm'>Adresse email professionnel: </label>
              <input
                type='texte'
                id='freelanceMail'
                name='freelance'
                required
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='FicheForm'>Mot de passe: </label>
              <input
                type='text'
                id='freelancePassword'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='FicheForm'>Siret: </label>
              <input
                type='text'
                id='freelanceSiret'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>
            <hr />
            <div className='FicheForm'>
              <input type='submit' value='Création de ma fiche' />
            </div>


          </fieldset>
        </form>
      </div>
    );
  }
}

export default Registration;
