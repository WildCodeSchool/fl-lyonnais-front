// Listing2 utilisé pour la recherche d'une façon d'afficher les cartes

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Freelance2 from '../components/Freelance2';
import '../styles/Listing2.css';
import freelances from './people';


function Listing2 (props) {
  // Construit une liste des freelances
  const outputFreelances = freelances.map(freelance => <Freelance2 key={freelance.email} freelance={freelance} />);
  console.log(outputFreelances.length);
  return (
    <div className='Listing'>
      <Header />

      <div className='everyFreelanceCards'>
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
      </div>

      <Footer />
    </div>
  );
}

export default Listing2;
