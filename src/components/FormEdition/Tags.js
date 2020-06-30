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
  const [skillsList2,setSkillList2] = useState([]);
  const url = 'http://localhost:3000/tag';
  
  console.log('axios tags')
  useEffect( async () => {
    const result = await axios.get(url);
    setSkillList2(result.data.data)
  }, [])
    console.log(skillsList2, 'yeahhhhhh')


const { tag_name, handleTag } = useContext(EditionContext);
const classes = useStyles();

return (

  <React.Fragment>
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={skillsList.map((option) => option.skill)}
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

const skillsList = [
  { skill: 'Javascript' },
  { skill: 'React' },
  { skill: 'PHP' },
  { skill: 'Vue' },
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'Bootstrap' },
  { skill: 'Front-end' },
  { skill: 'Back-end' },
  { skill: 'Java' },
  { skill: 'Full-stack' },
  { skill: 'Design' },
  { skill: 'UX/UI' },
]; 
