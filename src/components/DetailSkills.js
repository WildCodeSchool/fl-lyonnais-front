import React from 'react';
import '../styles/Detail.scss';
const { generateKey } = require('../functionshelper');

function detailSkills (props) {
  return (
    <div>
      <h2 className='detailh2'>Mes compétences</h2>
      <div className='detailskills'>
        <div className='mainSkills'>
          <ul>
            {props.tags.map(tag => {
              return (<li key={generateKey(tag.id)}>{tag.name}</li>);
            })}
          </ul>
        </div>
        <p id='detailskillstjm'>TJM : à partir de <span className='detailskillstjmprice'>{props.freelances.average_daily_rate}</span> € par jour.</p>
      </div>

    </div>
  );
}
export default detailSkills;
