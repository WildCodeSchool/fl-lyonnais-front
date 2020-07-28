import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import EditionContext from '../EditionContext';
import API from '../../../API'
import './TodoLisItem.css'
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ImageCropInput from '../ImageCropInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}));

const TodoListItem = (props) => {
  const { setReferenceField, deleteReference } = useContext(EditionContext);
  const classes = useStyles();

  const handleUrlInput = (e) => {
    setReferenceField(props.reference.id, 'url', e.target.value);
  };

  const url = process.env.REACT_APP_API_URL + '/'

  const uploadPhoto = async (mainPictureBlob) => {
    const mainPictureFile = await fetch(mainPictureBlob)
    .then(r => r.blob())
    .then(blobFile => new File([blobFile], "image.jpg", { type: "image/jpg" }))
    let url = process.env.REACT_APP_API_URL + '/freelances/account/image';
    const formData = new FormData();
    formData.append('title', 'titre');
    formData.append("image", mainPictureFile);  
    API.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        setReferenceField(props.reference.id, 'image', res.data.image);
      }
      )
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className='referencesForm'>
      <Grid container spacing={3}>

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
          <div className='referencesEtPhoto'>
            <div className='RefPhoto'>
              {props.reference.image ? <img src={url + props.reference.image} alt={props.reference.name} /> : <img src='https://img.icons8.com/windows/96/000000/file-upload.png' alt='default' />}
            </div>
          <div>
            <div className={classes.root}>
              <ImageCropInput onValidateCrop={uploadPhoto}
              renderInput={onChange => 
              <div className={classes.root}>
              <input type='file' onChange={onChange} />
            </div>}
              cropSize={ 100, 170 }
              renderValidateButton={
                (onClick, disabled) =>
                  <Button onClick={onClick} disabled={disabled} variant="contained" color="primary">
                    Valider
              </Button>
              }
              renderCancelButton={
                (onClick, disabled) =>
                  <div style={{ marginRight: 50, display: 'inline-block' }} >
                    <Button onClick={onClick} disabled={disabled} variant="outlined" color="secondary">
                      Annuler
                    </Button>
                  </div>
              }
            />
            <Grid  >
              <TextField
                autoComplete='fname'
                name='image'
                variant='outlined'
                fullWidth
                id='url de votre projet'
                label='url de votre projet'
                autoFocus
                onChange={handleUrlInput}
                value={props.reference.url}
              />
            </Grid>
            </div>
          </div>
          </div>

        </Grid>

      </Grid>

    </div>
  );
};

export default TodoListItem;
