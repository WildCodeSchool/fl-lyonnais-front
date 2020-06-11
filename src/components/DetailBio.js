import React from 'react';
import '../JohnDoe';

function detailBio (props) {
  return (
    <div className="detailBio">
      <div className="detailBioPhotoName">
        <img src={props.freelance.url_photo} alt={`${props.freelance.lastname}`} className='detailPhoto' />
        <h1>{props.freelance.firstname} {props.freelance.lastname}</h1>
      </div>
      <div>
        <p>{props.freelance.bio}</p>
      </div>
    </div>
  );
}

export default detailBio;
