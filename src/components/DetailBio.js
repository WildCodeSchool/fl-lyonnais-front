import React from 'react';
import '../test/JohnDoe';

function detailBio (props) {
  return (
    <div className='detailBio'>
      <div className=' detailBioPhotoName '>
        <img src={props.freelance.url_photo} alt={`${props.freelance.lastname}`} className='detailPhoto' />
        <div className='detailnametitle'>
          <h2>{props.freelance.firstname} {props.freelance.lastname}</h2>
          <h2>{props.freelance.job_title}</h2>
        </div>
      </div>
      <div className='detailBioParagraphContainer'>
        <p>{props.freelance.bio}</p>
      </div>
    </div>
  );
}

export default detailBio;
