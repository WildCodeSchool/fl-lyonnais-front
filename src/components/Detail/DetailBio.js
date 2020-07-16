import React from 'react';
import avatar from  '../../images/avatar.png'
function detailBio (props) {
  const url = process.env.REACT_APP_API_URL +'/'

  let photo = props.freelances.url_photo;
  if (props.freelances.url_photo) {
    if (props.freelances.url_photo.substr(0,4) !== 'http') {
      photo = url + props.freelances.url_photo;
    }
  } else {
    photo = avatar;
  }

  return (
    <div className='detail-bio-container'>
      <div className='avatar-container'>
        <img src={photo} alt={`${props.freelances.lastname}`} className='detailPhoto' />
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
