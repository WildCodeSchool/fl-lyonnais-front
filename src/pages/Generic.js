import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import '../styles/Generic.css';

function Generic (props) {
  return (
    <div className='Generic'>
      <Header />
      <h2>Mentions légales{props.legalDisclaimer[0].name} </h2>
      <p>{props.legalDisclaimer[0].headquarters}</p>
      <p>{props.legalDisclaimer.direction} <span>{props.legalDisclaimer[0].phone}</span></p>
      <p>{props.legalDisclaimer[0].info}</p>
      <br/>
      <Footer />
    </div>
  );
}

export default Generic;
