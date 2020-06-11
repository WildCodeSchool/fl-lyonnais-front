import React from 'react';
import '../styles/Detail.scss';

function DetailReferences ({ freelance }) {
  return (
    <div>
      <h2 className='detailh2'>Mes Références</h2>
      <div className='carousel'>
        {freelance.references.map(reference => {
          return (
            <div className='reference'>
              <img src={reference.image} alt={reference.name} />
              <p>{reference.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailReferences;
