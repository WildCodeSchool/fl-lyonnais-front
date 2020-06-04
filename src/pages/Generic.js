import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import '../styles/Generic.css';

function Generic (props) {
  return (
    <div className='Generic'>
      <Header />
      <h1>Politique de confidentialité</h1>
      <h2>Mentions légales</h2>
      <h3>Dénommination 
        <p>{props.legalDisclaimer[0].name}</p>
      </h3>
      <h3>Siège Social        
        <p>{props.legalDisclaimer[0].headquarters}</p>
      </h3>
      <h3>Adresse de courrier électronique et numéro de téléphone:
        <p>{props.legalDisclaimer[0].mail} <span>{props.legalDisclaimer[0].phone}</span></p>
      </h3>Mentions complémentaires:
        <p>{props.legalDisclaimer[0].info}</p>
      <h3>Directeur de la publication :
        <p>{props.legalDisclaimer[0].editor}</p>
      </h3>
      <Footer />
    </div>
  );
}

export default Generic;
