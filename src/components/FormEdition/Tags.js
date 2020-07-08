import React, { useContext, useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext';
import Link from '@material-ui/core/Link';
import axios from 'axios';
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
  const [tagList, setTagList] = useState([]);
  const url = 'http://localhost:3000/tags';
  useEffect(() => {
    async function getData () {
      await axios.get(url)
        .then(res => res.data)
        .then(data => setTagList(data.data));
    }
    getData();
  }, []);

  const { tagNameChosen, handleTag, idTagList, addIdTagIdsChosen } = useContext(EditionContext);
  const classes = useStyles();

  const handleIdtag = (e) => {
    handleTag(e);
    addIdTagIdsChosen(idTagList);
  };
  return (

    <>
      <div className={classes.root}>
        <Autocomplete
          multiple
          id={tagNameChosen.id}
          options={tagList.map((option) => option.name)}
          defaultValue={[]}
          value={tagNameChosen}
          onChange={handleIdtag}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant='outlined' label={option} {...getTagProps({ index })} />
            ))}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='compétences' placeholder='Favorites' />
          )}
        />
        <Link component='button' variant='body2'> <Chat /> Il vous manque une compétence ?</Link>
      </div>
    </>
  );
}
