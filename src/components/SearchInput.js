import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

export default function SearchInput () {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await axios.get(process.env.REACT_APP_API_URL + '/tags');
      setTags(res.data.data);
    };
    fetchTags();
  }, []);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id='search'
        disableClearable
        options={tags.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            style={{ backgroundColor: '#eef9fe', borderRadius: '15px' }}
            {...params}
            placeholder='Search input'
            margin='small'
            variant='outlined'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}
