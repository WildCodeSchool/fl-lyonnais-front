import React from 'react';
import '../styles/DetailReferences.css';

function DetailReferences ({freelance}) {
  return (
    <div className='carousel'>
      {freelance.references.map(reference => {
        return (
          <div className='reference'>
            <img src={reference.image} alt={reference.name}/>
            <p>{reference.name}</p> 
          </div>
        )
      })
      }
    </div>
  );
}


export default DetailReferences;
