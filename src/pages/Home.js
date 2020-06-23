import React from 'react';
import '../styles/Home.scss';
import SearchBar from '../components/SearchBar';
import logo from '../images/logo.png';

function Home () {
  return (
    <div className='home'>
      <div className='logo'>
        <img src={logo} alt='Logo du site Freelance Lyonnais' className='logoHome' />
      </div>
      <div className='form'>
        <SearchBar />
      </div>
      <main className="homepage">
        
        <h1> Bienvenue chez Les Freelances Lyonnais </h1>
        
 
<h3>Qui se cache derrière Les Freelances Lyonnais ? </h3>
<h5>
Si vous êtes arrivé.e.s sur cette page, c’est que vous en connaissez au moins un.e :)
Vous avez apprécié la qualité de son travail, sa proximité géographique, et sa disponibilité. 
 
Imaginez maintenant qu’on vous dise qu’on connaît 1800 autres professionnel.le.s comme ça ?  
 </h5>

<h3>Lyon, c’est un petit réseau, et ça tombe bien. </h3>
<h5>
C’est bien connu, à Lyon, les choses fonctionnent en réseaux. 
Les Freelances Lyonnais l’ont compris, et jouent sur cette dynamique pour trouver leurs client.e.s et leurs partenaires de prestations.  
 
Ce réseau offre des rendez-vous mensuels pour réseauter et se tenir à jour sur les actualités professionnelles locales.  Notre groupe Facebook nous permet de consulter en tout temps ces 1800 professionnel.le.s et aller chercher les réponses, ressources et conseils qui font la différence. 
</h5>
<h3>Un arsenal de compétences dans lequel piocher </h3>

<h5>
L’annuaire des Freelances, c’est un peu comme faire son marché ou visiter son magasin de quartier : vous appuyez le commerce local et vous avez l’avantage d’une offre sur mesure, dans votre langue, voire votre quartier ! 

Ce Freelance bénéficie de l’appui de son réseau pour aller chercher un compétence additionnelle dont votre projet aura besoin, soumettre à la sagesse de la foule connaisseuse les questions pointues ou encore vous référer un autre prestataire de confiance. 


        </h5>
      </main>
    </div>
  );
}

export default Home;
