import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../pages/Detail.scss';
import { generateKey } from '../../functionshelper';
import SearchContext from './SearchContext'
const queryString = require('query-string');


function DetailSkills (props) {
  const { updateSearch } = useContext(SearchContext);
  const history = useHistory();

  const handleTagClick = (tag) => {
    const urlQuery = queryString.stringify({
      search: tag.name.split(' ')
    }, { arrayFormat: 'index', skipNull: true });
    const url = '/liste_freelance?' + urlQuery;
    updateSearch(tag.name);
    history.push(url);
  };

  return (
    <div>
      <h2 className='detailh2'>Compétences</h2>
      <div className='detailskills'>
        <div className='mainSkills'>
          <ul>
            {props.tags.map(tag => {
              return (<li key={generateKey(tag.id)}><a onClick={() => handleTagClick(tag)}>{tag.name}</a></li>);
            })}
          </ul>
        </div>
        <p id='detailskillstjm'>TJM : à partir de <span className='detailskillstjmprice'>{props.freelances.average_daily_rate}</span> € par jour.</p>
      </div>
    </div>
  );
}
export default DetailSkills;
