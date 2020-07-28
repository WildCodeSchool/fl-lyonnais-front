import React, {useContext} from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EditionContext from './EditionContext';
import '../../pages/generic page/Home.scss';
import ImageCropInput from './ImageCropInput';
import { Button } from '@material-ui/core';
import API from '../../API';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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


export default function AddressForm () {

  const { email, job_title,setUrlPhoto, firstname, lastname, street, zip_code, city, bio, handleAdressFormChange, url_photo } = useContext(EditionContext);
  const url = process.env.REACT_APP_API_URL +'/'
  const classes = useStyles();

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
          console.log('Photo de Profil res.data',res.data) 
          setUrlPhoto(res.data.image) // image :url 'uploads/
        }
        )
        .catch(err => {
          console.error(err);
        });
        console.log(mainPictureFile)
    }
  
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstname'
            label='Prenom'
            fullWidth
            autoComplete='given-name'
            disabled
            value={firstname}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastname'
            label='Nom'
            fullWidth
            autoComplete='family-name'
            disabled
            value={lastname}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='email'
            name='email'
            disabled
            label='email'
            fullWidth
            autoComplete='email'
            value={email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='job_title'
            name='job_title'
            label='Poste'
            fullWidth
            autoComplete='job_title'
            value={job_title}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='address1'
            name='street'
            label='Numéro et Rue'
            fullWidth
            autoComplete='shipping address-line1'
            value={street}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='city'
            name='city'
            label='Ville'
            fullWidth
            autoComplete='shipping address-level2'
            value={city}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='zip'
            name='zip_code'
            label='Code Postal'
            fullWidth
            autoComplete='shipping postal-code'
            value={zip_code}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} fullWidth>
          <TextField
            id='outlined-multiline-static'
            label='Biographie'
            name='bio'
            multiline
            fullWidth
            rows={4}
            variant='outlined'
            value={bio}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} justify='center'>
          <div className='RefPhoto'>
            <div className = '' >
            {url_photo && <img src={url + url_photo} alt={url_photo} />}
            </div>
            <ImageCropInput onValidateCrop={uploadPhoto}
              renderInput={onChange => 
              <div className={classes.root}>
              <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' onChange={onChange} />
              <label htmlFor='contained-button-file'>
                <Button style={{ backgroundColor: 'var(--green)' }} variant='contained' color='primary' component='span' className={classes.button} startIcon={<CloudUploadIcon />}>Photo de profil</Button>
              </label>
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
          </div>
        </Grid>
      </Grid>
    </>
  );
}
