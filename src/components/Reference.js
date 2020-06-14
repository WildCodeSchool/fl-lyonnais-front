import React from 'react';
import '../styles/Reference.css';

function Reference ({ freelance }) {
  return (
    <div className='carousel'>
      <p className='para '>{freelance.name}</p>
      <img src={freelance.image} alt={freelance.name} />
    </div>
  );
}

export default Reference;
