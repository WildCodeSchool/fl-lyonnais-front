import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Listing.scss';
import avatar from '../images/avatar.png';

const Freelance = (props) => {
  const url = process.env.REACT_APP_API_URL + '/';

  let photo = props.urlPhoto;
  if (props.urlPhoto) {
    if (props.urlPhoto.substr(0, 4) !== 'http') {
      photo = url + props.urlPhoto;
    }
  } else {
    photo = avatar;
  }

  return (
    <div className='freelance2' key={props.id}>
      <div className='container'>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${props.id}`}>
          <div className='card'>

            <div className='card-image'>
              <img src={photo} alt='avatar' />
            </div>

            <div className='card-body'>

              <div className='card-name'>
                <h2>{props.firstname} {props.lastname}</h2>
              </div>

              <div className='card-title'>
                <p>{props.job_title}</p>
              </div>

            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Freelance;
