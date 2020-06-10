import React from 'react';
import '../JohnDoe';

function detailBio (props) {
  return (
    <div>
      <h1>{props.freelance.firstname} {props.freelance.lastname}</h1>
      <img src={props.freelance.url_photo} alt={`${props.freelance.lastname}`} className='detailPhoto' />
      <p>{props.freelance.bio}</p>
    </div>
  );
}

export default detailBio;
