import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Listing.scss';

import avatar from '../images/avatar.png'

const Freelance = (props) => {
  const url = process.env.REACT_APP_API_URL +'/'

  return (
    <div className='freelance2'>
      <div className='container'>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${props.id}`}>
          <div className='card'>

            <div className='card-image'>
              <img src={props.urlPhoto ? url+ props.urlPhoto : avatar} alt='Orange' />
            </div>

            <div className='card-body'>

              <div className='card-name'>
                <h4>{props.firstname} {props.lastname}</h4>
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
