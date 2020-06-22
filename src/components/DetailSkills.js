import React from 'react';
import '../styles/Detail.scss';
const { generateKey } = require('../functionshelper');

function detailSkills (props) {
  return (
    <div>
      <h3 className='detailh2'>Mes compétences</h3>
      <div className='detailskills'>
        <div className='mainSkills'>
          <table className='detailtable'>
            <tr>
              <th><h3>Principales</h3></th>
              <th><h3>Autres</h3></th>
            </tr>
            <tr>
              <td>{props.freelance.mainSkills.map(mainSkill => {
                return (<p key={generateKey(mainSkill)}>{mainSkill}</p>);
              })}
              </td>
              <td>{props.freelance.otherSkills.map(otherSkill => {
                return (<p key={generateKey(otherSkill)}>{otherSkill}</p>);
              })}
              </td>

            </tr>
          </table>

        </div>
        <p id='detailskillstjm'>TJM : à partir de <span className='detailskillstjmprice'>{props.freelance.average_daily_rate}</span> € par jour.</p>
      </div>

    </div>
  );
}
export default detailSkills;
