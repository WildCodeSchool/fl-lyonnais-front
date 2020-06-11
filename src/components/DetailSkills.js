import React from 'react';
import '../styles/Detail.css';

function detailSkills (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes compétences</h2>
      <div className='mainSkills'>
        <ul>
          {props.freelance.mainSkills.map(mainSkill => {
            return (<li>{mainSkill}</li>);
          })}
        </ul>
      </div>
      <div className='otherSkills'>
        <ul>
          {props.freelance.otherSkills.map(otherSkill => {
            return (<li>{otherSkill}</li>);
          })}
        </ul>
      </div>
      <p id='detailskillstjm'>TJM : à partir de {props.freelance.average_daily_rate} € par jour.</p>
    </div>
  );
}
export default detailSkills;
