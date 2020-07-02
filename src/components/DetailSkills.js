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
              <th><h4>Principales</h4></th>
              <th><h4>Autres</h4></th>
            </tr>
            <tr>
              <td>{props.tags.map(tag => {
                return (<p key={generateKey(tag.id)}>{tag.name}</p>);
              })}
              </td>

            </tr>
          </table>

        </div>
        <p id='detailskillstjm'>TJM : à partir de <span className='detailskillstjmprice'>{props.freelances.average_daily_rate}</span> € par jour.</p>
      </div>

    </div>
  );
}
export default detailSkills;
