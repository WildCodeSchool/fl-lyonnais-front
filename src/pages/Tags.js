import React, { useState, useEffect } from 'react';
import API from '../API';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Tags</h1>
      {tags.map(tag => <Link to={'/liste_freelance/page=' + currentPage + '&flperpage=' + freelancesPerPage + '&search[0]=' + tag.name}><li>{tag.name} ({tag.nb})</li></Link>)}
    </div>

  );
};

export default Tags;
