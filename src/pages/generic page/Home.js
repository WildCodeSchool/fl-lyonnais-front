import React from 'react';
import logo from '../../images/logo.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Home.scss';

const title = 'Accueil Freelances Lyonnais';

function Home () {
  return (
    <div className='home'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='logo'><img src={logo} alt='Logo du site Freelance Lyonnais' className='logoHome' /></div>
      <div className='form' />
      <main className='homepage'>
        <h1> Bienvenue chez Les Freelances Lyonnais </h1>

        <div className='paragraphe'>
          <h3>Qui se cache derrière Les Freelances Lyonnais ? </h3>
          <p style={{ marginTop: '16px', marginBottom: '0' }}>Si vous êtes arrivé.e.s sur cette page, c’est que vous en connaissez au moins un.e :) Vous avez apprécié la qualité de son travail, sa proximité géographique, et sa disponibilité. Imaginez maintenant qu’on vous dise qu’on connaît 1800 autres professionnel.le.s comme ça ?</p>
          <Button variant='contained' color='primary' style={{ backgroundColor: 'var(--blue)' }}>
            <Link style={{ color: 'white' }} to='/liste_freelance/'>Les Freelances Lyonnais</Link>
          </Button>
        </div>

        <div className='paragraphe'>
          <h3>Lyon, c’est un petit réseau, et ça tombe bien. </h3>
          <p>C’est bien connu, à Lyon, les choses fonctionnent en réseaux. Les Freelances Lyonnais l’ont compris, et jouent sur cette dynamique pour trouver leurs client.e.s et leurs partenaires de prestations. Ce réseau offre des rendez-vous mensuels pour réseauter et se tenir à jour sur les actualités professionnelles locales.  Notre groupe Facebook nous permet de consulter en tout temps ces 1800 professionnel.le.s et aller chercher les réponses, ressources et conseils qui font la différence.</p>
        </div>

        <div className='paragraphe'>
          <h3>Un arsenal de compétences dans lequel piocher </h3>
          <p style={{ marginTop: '16px', marginBottom: '0' }}>L’annuaire des Freelances, c’est un peu comme faire son marché ou visiter son magasin de quartier : vous appuyez le commerce local et vous avez l’avantage d’une offre sur mesure, dans votre langue, voire votre quartier ! Ce Freelance bénéficie de l’appui de son réseau pour aller chercher une compétence additionnelle dont votre projet aura besoin, soumettre à la sagesse de la foule connaisseuse les questions pointues ou encore vous référer un autre prestataire de confiance.</p>
          <Button variant='contained' color='primary' style={{ backgroundColor: 'var(--blue)' }}>
            <Link style={{ color: 'white' }} to='/inscription/'>Je créé ma fiche freelance gratuitement</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
