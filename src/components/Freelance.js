import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Listing.scss';

const Freelance = (props) => {
  return (
    <div className='freelance2'>
      <div className='container'>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${props.id}`}>
          <div className='card'>

            <div className='card-image'>
              <img src={props.urlPhoto} alt='Orange' />
            </div>

            <div className='card-body'>

              <div className='card-name'>
                <h4>{props.firstname}</h4> <h4>{props.lastname}</h4>
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
