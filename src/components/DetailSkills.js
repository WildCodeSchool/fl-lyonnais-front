import React from 'react';
import '../styles/Detail.scss';
const { generateKey } = require('../functionshelper');

function detailSkills (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes compétences</h2>
      <div className='mainSkills'>
        <ul>
          {props.freelance.mainSkills.map(mainSkill => {
            return (<li key={generateKey(mainSkill)}>{mainSkill}</li>);
          })}
        </ul>
      </div>
      <div className='otherSkills'>
        <ul>
          {props.freelance.otherSkills.map(otherSkill => {
            return (<li key={generateKey(otherSkill)}>{otherSkill}</li>);
          })}
        </ul>
      </div>
      <p id='detailskillstjm'>TJM : à partir de <span className="detailskillstjmprice">{props.freelance.average_daily_rate}</span> € par jour.</p>
    </div>
  );
}
export default detailSkills;
