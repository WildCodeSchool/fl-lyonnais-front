import React, { useContext, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext';
import API from '../../API';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3)
    },
  }
}));

export default function Tags () {
  const { chosenTags, setChosenTags, deleteChosenTag, allTags, setAllTags } = useContext(EditionContext);

  useEffect(() => {
    async function getData () {
      await API.get('/tags')
        .then(res => res.data)
        .then(data => setAllTags(data.data));
    }
    getData();
  }, []);

  const classes = useStyles();

  const handleAutocompleteChange = (e, chosenTags) => {
    setChosenTags(chosenTags);
  };

  const handleTagDelete = (tag) => {
    deleteChosenTag(tag.id);
  };
  return (

    <>
      <div className={classes.root}>
        <Autocomplete
          id='autocomplete'
          multiple
          getOptionLabel={(tag) => tag.name}
          options={allTags}
          value={chosenTags}
          onChange={handleAutocompleteChange}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              return (
                <Chip
                  label={option.name}
                  onDelete={() => handleTagDelete(option)}
                  className={classes.chip}
                />
              );
            })}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='compétences' />
          )}
        />
        <Button style={{ backgroundColor: 'var(--green)' }} onClick={() => { window.$crisp.push(['do', 'chat:open']); }} variant='contained' color='primary' component='span' className={classes.button}>Il vous manque une compétence ?</Button>
      </div>
    </>
  );
}
