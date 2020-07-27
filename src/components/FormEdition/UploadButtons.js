import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditionContext from './EditionContext';
import API from '../../API';

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

export default function UploadButtons () {
  const classes = useStyles();
  const { setUrlPhoto } = useContext(EditionContext);

  const handlePictureProfileUpload = (e) => {
    const image = e.target.files[0];
    // // url Photo
    const url = process.env.REACT_APP_API_URL + '/freelances/account/image';
    const formData = new FormData();
    formData.append('title', 'titre');
    formData.append('image', image);
    API.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        setUrlPhoto(res.data.image); // image :url 'uploads/
      }
      )
      .catch(err => {
        console.error(err);
      });
    setUrlPhoto(image);
  };

  return (
    <div className={classes.root}>
      <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' onChange={handlePictureProfileUpload} />
      <label htmlFor='contained-button-file'>
        <Button style={{ backgroundColor: 'var(--green)' }} variant='contained' color='primary' component='span' className={classes.button} startIcon={<CloudUploadIcon />}>Photo de profil</Button>
      </label>
    </div>
  );
}
