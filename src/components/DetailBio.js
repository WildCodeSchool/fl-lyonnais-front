import React from 'react';

function detailBio (props) {
  return (
    <div className='detailBio'>
      <div className='detailBioPhotoName'>

        <img src={props.freelances.url_photo} alt={`${props.freelances.lastname}`} className='detailPhoto' />

        <div className='detailnametitle'>

          <h1>{props.freelances.firstname} {props.freelances.lastname}</h1>
          <h1>{props.freelances.job_title}</h1>
          <fieldset className='detailtextebio'>

            <p>{props.freelances.bio}</p>

          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default detailBio;
