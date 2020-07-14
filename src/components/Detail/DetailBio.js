import React from 'react';
import avatar from  '../../images/avatar.png'
function detailBio (props) {
  const url = process.env.REACT_APP_API_URL +'/'
  return (
    <div className='detail-bio-container'>
      <div className='avatar-container'>
        <img src={props.freelances.url_photo ? url+ props.freelances.url_photo : avatar} alt={`${props.freelances.lastname}`} className='detailPhoto' />
      </div>
      <div className='info-container'>
        <h2>{props.freelances.firstname} {props.freelances.lastname}</h2>
        <h2>{props.freelances.job_title}</h2>
        <p>{props.freelances.bio}</p>
      </div>
    </div>
  );
}

export default detailBio;
