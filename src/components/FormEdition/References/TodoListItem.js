import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import EditionContext from '../EditionContext';

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const TodoListItem = (props) => {
  const { handleFile, handleUrlLink } = useContext(EditionContext);
  const [inputUrlValue, setInputUrlValue] = useState();

  const handleFileClick = (e) => {
    console.log(e);
    handleFile(e);
  };

  const handleUrlInput = (e) => {
    setInputUrlValue(e.target.value);
    handleUrlLink(e.target.value);
  };

  return (
    <Grid container spacing={3}>

      <Grid item xs={12} justifyContent='center'>
        <ListItem divider={props.divider}>
          <ListItemText primary={props.text} />
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete Todo' onClick={props.onButtonClick}>
              <DeleteOutlined />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Grid>
      <Grid item xs={12}>
        <input type='file' onChange={e => handleFileClick(e.target.files[0])} />

        <input type='text' label='url de votre projet' value={inputUrlValue} placeholder='url de votre projet' onChange={handleUrlInput} />
      </Grid>

    </Grid>
  );
};

export default TodoListItem;