import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Freelance from '../components/Freelance2';
import '../styles/Listing.css';
import freelances from './people';

function Listing (props) {
  // Construit une liste des freelances
  const outputFreelances = freelances.map(freelance => <Freelance key={freelance.id} freelance={freelance} />);

  return (
    <div className='Listing'>
      <Header />

      <div className='everyFreelanceCards'>
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}

      </div>

      <Footer />
    </div>
  );
}

export default Listing;
