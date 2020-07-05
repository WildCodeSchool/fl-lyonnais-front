import React from 'react';
import '../../styles/Detail.scss';

function DetailReferences (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes Références</h2>
      <div className='carousel'>
        {props.references.map(reference => {
          return (
            <a href={reference.url} className='reference' key={reference.id}>
              <img src={reference.image} alt={reference.name} />
              <p>{reference.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default DetailReferences;
