import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import '../styles/Generic.css';

function Generic (props) {
  return (
    <div className='Generic'>
      <Header />
      <h1>Titre de la Page (title) </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti
       eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>

      <h2>Titre de niveau 2 </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti
       eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>

      <h2>Titre de niveau 2 </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti
       eligendi error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?</p>

       <Footer />
    </div>
  );
}

export default Generic;
