import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import EditionContext from '../EditionContext';
import API from '../../../API'
import './TodoLisItem.css'

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const TodoListItem = (props) => {
  const { setReferenceField, deleteReference } = useContext(EditionContext);


  const handleUrlInput = (e) => {
    setReferenceField(props.reference.id, 'url', e.target.value);
  };

  const url = process.env.REACT_APP_API_URL + '/'
  const handleFileClick = (e) => {
    //Appel a l api/account /image
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    API.post(url + 'freelances/account/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log('Photo reférence res', res)
        console.log('Photo reférence  res.data', res.data)
        alert('Photo de profil envoyée')
        setReferenceField(props.reference.id, 'image', res.data.image)
      }
      )
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="referencesForm">
      <Grid container spacing={3} >

        <Grid item xs={12} justifyContent='center'>
          <ListItem divider={props.divider}>
            <ListItemText primary={props.reference.name} />
            <ListItemSecondaryAction>
              <IconButton aria-label='Delete Todo' onClick={() => deleteReference(props.reference.id)}>
                <DeleteOutlined />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Grid>
        
        <Grid item xs={12}>
          <div className="referencesEtPhoto">
            <div className='RefPhoto'>
              {props.reference.image && <img src={url + props.reference.image} alt={props.reference.name} />}
            </div>
          <div>
            <input type='file' onChange={handleFileClick} />
            <input type='text' name='image' label='url de votre projet' value={props.reference.url} placeholder='url de votre projet' onChange={handleUrlInput} />
          </div>
          </div>

        </Grid>

      </Grid>

    </div>
  );
};

export default TodoListItem;
