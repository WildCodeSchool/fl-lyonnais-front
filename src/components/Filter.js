import React, { useEffect, useState, useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import API from '../API';
import SearchContext from './Detail/SearchContext';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function FilterTags (tagsUsed) {
  const { handleTagsFilter } = useContext(SearchContext);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await API.get('/tags/api/used');
      setTags(res.data.data);
    };
    fetchTags();
  }, []);

  const handleAutocompleteChangeTags = (e, chosenTags) => {
    handleTagsFilter(chosenTags);
  };

  return (
    <div className='filters'>
      <Autocomplete
        multiple
        id='checkboxes-tags'
        options={tags}
        disableCloseOnSelect
        onChange={handleAutocompleteChangeTags}
        getOptionLabel={(option) => option.name}
        renderOption={(option, { selected }) => (
          <>

            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />

            {option.name} ({option.nb})
          </>
        )}
        style={{ width: '80%' }}
        renderInput={(params) => (
          <TextField
            style={{ backgroundColor: 'white', marginLeft: '30px' }}
            {...params}
            margin='none'
            variant='outlined'
            label='Filtres'
            placeholder='Autres compétences'
          />
        )}
      />
    </div>
  );
}
