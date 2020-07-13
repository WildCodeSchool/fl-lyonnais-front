import React from 'react';
import '../../pages/Detail.scss';
import avatar from '../../images/reficon.png'

function DetailReferences (props) {
  console.log(props.references)
  const url = process.env.REACT_APP_API_URL +'/'
  return (
    <div>
      <h2 className='detailh2'>Références</h2>
      <div className='carousel'>
        {props.references.map(reference => {
          return (
            <a href={reference.url} className='reference' key={reference.id}>
              <img src={reference.image ? url + reference.image : avatar} alt={reference.name} />
              <p>{reference.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default DetailReferences;
