import React from 'react';
import Freelance from '../components/Freelance2';
import '../styles/Listing.scss';
import freelances from '../test/people';

function Listing () {
  // Construit une liste des freelances
  const outputFreelances = freelances.map(freelance => <Freelance key={freelance.id} freelance={freelance} />);

  return (
    <div className='Listing'>
      <div className='everyFreelanceCards'>
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
        {outputFreelances}
      </div>
    </div>
  );
}

export default Listing;
