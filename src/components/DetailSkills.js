import React from 'react';

function detailSkills (props){
  return(
    <div>
      <h2>Mes compétences</h2>
      <div className='mainSkills'>
        <ul>
          {props.freelance.mainSkills.map(mainSkill => {
            return(<li>{mainSkill}</li>);
          })}
        </ul>
      </div>
      <div className='otherSkills'>
        <ul>
          {props.freelance.otherSkills.map(otherSkill => {
            return(<li>{otherSkill}</li>);
          })}
        </ul>
      </div>
      <p>TJM : à partir de {props.freelance.average_daily_rate} € par jour.</p>
    </div>
  )
}
export default detailSkills;