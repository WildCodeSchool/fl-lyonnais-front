import React, { useContext, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext';
import Link from '@material-ui/core/Link';
import API from '../../API';
import Chat from '../Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3)
    },
    height: 300
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
        <Link component='button' variant='body2'> <Chat /> Il vous manque une compétence ?</Link>
      </div>
    </>
  );
}
