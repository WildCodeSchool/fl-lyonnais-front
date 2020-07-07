import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import API from '../API';

export default function SearchInput () {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await API.get('/tags');
      setTags(res.data.data);
    };
    fetchTags();
  }, []);

  return (
    <div style={{ width: 300}}>
      <Autocomplete
        freeSolo
        id='search'
        disableClearable
        options={tags.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            style={{ marginLeft:'2px', marginTop:'15px', marginBottom:'15px', backgroundColor: '#eef9fe', borderRadius: '30px', padding: '10px',backgroundColor:'white' }}
            {...params}
            placeholder='Recherche'
            margin='small'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}
