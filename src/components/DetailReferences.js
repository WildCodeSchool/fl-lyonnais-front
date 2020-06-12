import React from 'react';
import '../styles/DetailReferences.css';

function DetailReferences ({freelance}) {
  return (
    <div>
      <h1>Mes Références</h1>
      {freelance.references.map(reference => {
        return (
          <div className='carousel'>
            <p>{reference.name}</p> 
            <img src={reference.image} alt={reference.name}/>
          </div>
        )
      })
      }
    </div>
  );
}


export default DetailReferences;
