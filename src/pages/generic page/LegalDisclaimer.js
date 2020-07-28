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

        <div className='paragraphe'>
          <h3>Développement du site par les élèves de la Wild Code School de Lyon :</h3>
            <p>Ikram Beldjilali : <a href='https://github.com/ikramb-ctrl'>Github</a> / <a href='https://www.linkedin.com/in/ikram-beldjilali-298a501a2/'>Linkedin</a></p>
            <p>Christophe Crébier : <a href='https://github.com/Rincevent42'>Github</a> / <a href='https://www.linkedin.com/in/christophe-crebier/'>Linkedin</a></p>
            <p>Armin Saad : <a href='https://armins.co/github-w'>Github</a> / <a href='https://armins.co/linkedin'>Linkedin</a> / <a href='https://armins.co'>Website</a></p>
            <p>Pascal Pereira : <a href='https://github.com/Pascal-Pereira'>Github</a> / <a href='https://www.linkedin.com/in/pascal-pereira/'>Linkedin</a></p>
            <p>Florent Houdeillé : <a href='https://github.com/florenthoudeille'>Github</a> / <a href='https://www.linkedin.com/in/florenthoudeille/'>Linkedin</a></p>
        </div>
      </main>
    </div>
  );
}

export default LegalDisclaimer;
