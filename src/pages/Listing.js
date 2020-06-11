import React from 'react';
import Freelance from '../components/Freelance2';
import '../styles/Listing.scss';
import freelances from './people';
import { Link } from 'react-router-dom';

function Listing (props) {
  // Construit une liste des freelances
  const outputFreelances = freelances.map(freelance => <Freelance key={freelance.email} freelance={freelance} />);

  return (
    <div className='Listing'>
      <Link to='/detail'>
        <div className='everyFreelanceCards'>
          {outputFreelances}
          {outputFreelances}
          {outputFreelances}
          {outputFreelances}
        </div>
      </Link>
    </div>
  );
}

export default Listing;
