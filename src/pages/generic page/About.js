import React from 'react';
import './Generic.scss';

function About () {
  return (
    <div className='Generic'>
      <h1>A propos</h1>
      <section className='section'>
        <h2>Dénommination :</h2>
        <p>Freelances Lyonnais</p>
        <h2>Siège Social :</h2>
        <p>18-20 rue Tronchet 69006 Lyon</p>
        <p>Immatriculée au RCS de LYON : N° 880 240 130 00018</p>
        <p>Numéro individuel d'identification fiscale : FR65880240130</p>
        <h2>Adresse de courrier électronique et numéro de téléphone :</h2>
        <p>Pierre Ammeloot</p>
        <p>pierre@webanyone.fr</p>
        <p>+33 6 02 12 06 33</p>
        <h2>Mentions complémentaires :</h2>
        <p>Hébergeur du site internet : OVH, 2 rue Kellermann, 59100 Roubaix, France</p>
        <p>Directeur de la publication : Pierre Ammeloot</p>
      </section>
    </div>
  );
}

export default About;
