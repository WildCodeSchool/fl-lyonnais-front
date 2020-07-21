import React, { useState, useEffect, useContext } from 'react';
import API from '../API';
import { useHistory } from 'react-router-dom';
import './Tags.scss';
import SearchContext from '../components/Detail/SearchContext';

const queryString = require('query-string');

function Tags () {
  const [tags, setTags] = useState([]);
  const { updateSearch } = useContext(SearchContext);
  const history = useHistory();

  useEffect(() => {
    API.get('/tags/api/used')
      .then(response => response.data)
      .then(data => {
        setTags(data.data);
      });
  }, []);

  const handleTagClick = (tag) => {
    const urlQuery = queryString.stringify({
      search: tag.name.split(' ')
    }, { arrayFormat: 'index', skipNull: true });
    const url = '/liste_freelance?' + urlQuery;
    updateSearch(tag.name);
    history.push(url);
  };

  return (
    <div className='tags'>
      <h1>Liste des Tags</h1>
      <h2>Cliquez sur un tag pour obtenir la liste des fiches de freelance associés:</h2>
      <div className='listingTags'>

        {tags.map(tag => {
          return <li key={tag.id}><a onClick={() => handleTagClick(tag)}>{tag.name} <div class='chip'>{tag.nb}</div></a></li>;
        })}
      </div>
    </div>

  );
}

export default Tags;
