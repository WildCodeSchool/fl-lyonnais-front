import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Freelance2.scss';

const Freelance = (props) => {
  const { id, urlPhoto, firstname, lastname, mainSkills } = props.freelance;

  return (
    <div className='freelance2'>
      <div className='container'>
        <div className='card'>
          <Link to={`/detail/${id}`}>

            <div className='card-image'>
              <img src={urlPhoto} alt='Orange' />
            </div>

            <div className='card-body'>

              <div className='card-name'>
                <h4>{firstname} {lastname}</h4>
              </div>

              <div className='card-title'>
                <p>{mainSkills[0]} | {mainSkills[2]} | {mainSkills[2]}</p>
              </div>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
