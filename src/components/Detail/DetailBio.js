import React from 'react';
import avatar from  '../../images/avatar.png'
function detailBio (props) {
  console.log('url photo',props.freelances.url_photo);
  const url = process.env.REACT_APP_API_URL +'/'
  return (
    <div className='detailBio'>
      <div className='detailBioPhotoName'>

        <img src={props.freelances.url_photo ? url+ props.freelances.url_photo : avatar} alt={`${props.freelances.lastname}`} className='detailPhoto' />

        <div className='detailnametitle'>

          <h1>{props.freelances.firstname} {props.freelances.lastname}</h1>
          <h1>{props.freelances.job_title}</h1>
          <div className='detailtextebio'>

            <p>{props.freelances.bio}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default detailBio;
