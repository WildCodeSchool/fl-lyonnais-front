import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import API from '../API';
import FilterTjm from '../components/FilterTjm';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterTags() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await API.get('/tags/api/used');
      setTags(res.data.data);
    };
    fetchTags();
  }, []);

  return (
    <div className='filters' > 
      <FilterTjm className="FilterTjm" />
      <Autocomplete
        multiple
        id="checkboxes-tags"
        options={tags}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(option, { selected }) => (
          <React.Fragment>

            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}/>

            {option.name} ({option.nb})
          </React.Fragment>
        )}
        style={{ width: '80%',  }}
        renderInput={(params) => (
          <TextField 
          style={{backgroundColor: 'white', marginLeft:'30px' }} 
          {...params} 
          margin='none' 
          variant="outlined"
          label="Filtres" 
          placeholder="Autres compétences"  />
        )}
      />
    </div>
  );
}
