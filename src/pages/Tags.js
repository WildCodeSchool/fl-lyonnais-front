import React, { useState, useEffect } from 'react';
import API from '../API';
import { Link } from 'react-router-dom';
import './Tags.scss';

function Tags() {
  const [tags, setTags] = useState([])
  const currentPage = 1
  const freelancesPerPage = 20

  useEffect(() => {
    API.get('/tags/api/used')
      .then(response => response.data)
      .then(data => {
        setTags(data.data);})
  }, []);

  return (
    <div className='tags'>
    <h1>Liste des Tags</h1>
    <h2>Cliquez sur un tag pour obtenir la liste des fiches de freelance associés:</h2>
    <div className='listingTags'>
      
      {tags.map(tag => <Link to={'/liste_freelance/page=' + currentPage + '&flperpage=' + freelancesPerPage + '&search[0]=' + tag.name}><li>{tag.name} ({tag.nb})</li></Link>)}
    </div>
    </div>

  );
};

export default Tags;
