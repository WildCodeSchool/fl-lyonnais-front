import React from 'react';
import '../styles/Detail.css';

function DetailReferences ({freelance}) {
  return (
    <div>
      <h2>Mes Références</h2>
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
    </div>
  );
}


export default DetailReferences;
