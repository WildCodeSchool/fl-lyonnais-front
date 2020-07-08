import React from 'react';
import './Generic.scss';

function Generic () {
  return (
    <div className='Generic'>
      <h1>Mentions légales</h1>
      <section className='section'>
        <p>Responsable du site : Pierre Ammeloot</p>
        <h3>Dénommination :</h3>
        <p>Freelances Lyonnais</p>
        <h3>Siège Social :</h3>
        <p>18-20 rue Tronchet 69006 Lyon</p>
        <p>Immatriculée au RCS de LYON : N° 880 240 130 00018</p>
        <p>Numéro individuel d'identification fiscale : FR65880240130</p>
        <h3>Adresse de courrier électronique et numéro de téléphone:</h3>
        <p>Pierre Ammeloot,pierre@webanyone.fr</p>
        <p>+33 6 02 12 06 33</p>
        <h3>Mentions complémentaires :</h3>
        <p>Hébergeur du site internet : OVH, 2 rue Kellermann, 59100 Roubaix, France</p>
        <h3>Directeur de la publication :</h3>
        <p>Pierre Ammeloot</p>
      </section>
    </div>
  );
}

export default Generic;
