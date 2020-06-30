import React, { useContext, useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    height: 300,
  },
}));

export default function Tags() {
  const [tagList,setTagList] = useState([]);
  const url = 'http://localhost:3000/tag';
  useEffect( async () => {
    const result = await axios.get(url);
    setTagList(result.data.data)
  }, [])


const { tag_name, handleTag } = useContext(EditionContext);
const classes = useStyles();

return (

  <React.Fragment>
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={tagList.map((option) => option.name)}
        defaultValue={[]}
        value={tag_name[0]}
        onChange={handleTag}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="compétences" placeholder="Favorites" />
        )}
      />
    </div>
  </React.Fragment>
);
}

