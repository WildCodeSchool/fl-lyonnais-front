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
        id='free-solo-2-demo'
        disableClearable
        options={tags.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search input'
            margin='normal'
            variant='outlined'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}
