import React from 'react';
import '../styles/Freelance2.scss';

const Freelance2 = (props) => {
  const { urlPhoto, firstname, lastname, mainSkills } = props.freelance;

  return (
    <div class="card">
        
      <div class="card-image">
        <img src={urlPhoto} alt="Orange" />
      </div>

      <div class="card-body">
  
        <div class="card-name">
          <h2>{firstname} {lastname}</h2>
        </div>

        <div class="card-title">
          <p>Compétences : {mainSkills[0]} / {mainSkills[2]} /{mainSkills[2]}</p>
        </div>
        
      </div>
          
    </div>
  );
};

export default Freelance2;
