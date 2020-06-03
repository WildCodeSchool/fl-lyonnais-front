import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
//import '../styles/Registration.css';
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

        <Header />
        
        <h1>Inscription </h1>

        <p> Présentation du concept de l'annuaire avec un paragraphe </p>

        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <legend>Créer mon compte de Freelance à Lyon: </legend>

            <div className='FicheForm'>
              <label htmlFor='InfoForm'>Nom: </label>
              <input
                type='text'
                id='freelanceFirstname'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='InfoForm'>Prénom: </label>
              <input
                type='text'
                id='freelanceName'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='InfoForm'>
              <label htmlFor='FicheForm'>Adresse email professionnel: </label>
              <input
                type='texte'
                id='freelanceMail'
                name='email'
                required
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='InfoForm'>Mot de passe: </label>
              <input
                type='text'
                id='freelancePassword'
                name='freelance'
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='FicheForm'>
              <label htmlFor='InfoForm'>Siret: </label>
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
          
      <Footer />

      </div>
            
    );
  }
}

export default Registration;
