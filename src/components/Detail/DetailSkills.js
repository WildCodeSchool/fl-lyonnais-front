import React from 'react';
import '../../pages/Detail.scss';
import { generateKey } from '../../functionshelper';
import { Link } from 'react-router-dom';

function detailSkills (props) {
  const currentPage = 1;
  const freelancesPerPage = 20;
  return (
    <div>
      <h2 className='detailh2'>Compétences</h2>
      <div className='detailskills'>
        <div className='mainSkills'>
          <ul>
            {props.tags.map(tag => {
              return (<Link to={'/liste_freelance/page=' + currentPage + '&flperpage=' + freelancesPerPage + '&search[0]=' + tag.name}><li key={generateKey(tag.id)}>{tag.name}</li></Link>);
            })}
          </ul>
        </div>
        <p id='detailskillstjm'>TJM : à partir de <span className='detailskillstjmprice'>{props.freelances.average_daily_rate}</span> € par jour.</p>
      </div>
    </div>
  );
}
export default detailSkills;
