import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Freelance2.scss';


const Freelance = (props) => {

  return (
    <div className='freelance2'>
      <div className='container'>
        <div className='card'>
          <Link to={`/detail/${props.id}`}>

            <div className='card-image'>
              <img src={props.urlPhoto} alt='Orange' />
            </div>

            <div className='card-body'>

              <div className='card-name'>
                <h4>{props.firstname} {props.lastname}</h4>
              </div>

              <div className='card-title'>
                <p>{props.job_title}</p>
              </div>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
