import React from 'react';
import './Home.scss';
import { Helmet } from 'react-helmet';
const title = 'Mentions légales';

function LegalDisclaimer () {
  return (
    <div className='home'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='form' />
      <main className='homepage'>
        <h1>Mentions légales</h1>

        <div className='paragraphe'>
          <h3>Dénomination :</h3>
          <p>Freelances Lyonnais</p>
        </div>

        <div className='paragraphe'>
          <h3>Siège Social :</h3>
          <p>WebAnyOne SAS</p>
          <p>18-20 rue Tronchet 69006 Lyon</p>
          <p>Immatriculée au RCS de LYON : N° 880 240 130 00018</p>
          <p>Numéro individuel d'identification fiscale : FR65880240130</p>
        </div>

        <div className='paragraphe'>
          <h3>Adresse de courrier électronique et numéro de téléphone :</h3>
          <p>Pierre Ammeloot</p>
          <p>pierre@webanyone.fr</p>
          <p>+33 6 02 12 06 33</p>
        </div>

        <div className='paragraphe'>
          <h3>Mentions complémentaires :</h3>
          <p>Hébergeur du site internet : OVH, 2 rue Kellermann, 59100 Roubaix, France</p>
          <p>Directeur de la publication : Pierre Ammeloot</p>
        </div>
      </main>
    </div>
  );
}

export default LegalDisclaimer;
