import React from 'react';
import '../test/JohnDoe';

function detailBio (props) {
  return (
    <div className='detailBio'>
      <div className='detailBioPhotoName'>
        
        <img src={props.freelance.url_photo} alt={`${props.freelance.lastname}`} className='detailPhoto' />
        
        <div className='detailnametitle'>
          
          <h1>{props.freelance.firstname} {props.freelance.lastname}</h1>
          <h1>{props.freelance.job_title}</h1>
          <fieldset className='detailtextebio'>

            <p>{props.freelance.bio}</p>

          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default detailBio;
