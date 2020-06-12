import React from 'react';
import '../styles/Freelance2.scss';

const Freelance = (props) => {
  const { urlPhoto, firstname, lastname, mainSkills } = props.freelance;

  return (
    <div className='container'>
      <div className='card'>

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

      </div>
    </div>
  );
};

export default Freelance;
