import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import UploadButtons from './UploadButtons';
import EditionContext from './EditionContext';
import '../../pages/generic page/Home.scss'
const url = process.env.REACT_APP_API_URL +'/'


export default function AddressForm () {
  const { url_photo, email, job_title, firstname, lastname, street, zip_code, city, bio, handleAdressFormChange } = useContext(EditionContext);
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
            label='Rue'
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
            id="outlined-multiline-static"
            label="Biographie"
            name='bio'
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            value={bio}
            onChange={(e) => handleAdressFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} justify='center'>
        <div className='RefPhoto'>
              {url_photo && <img src={url + url_photo} alt={url_photo} />}
            </div>
        </Grid>
        <Grid item xs={12} sm={12} justify='center'>
          <UploadButtons />
        </Grid>
      </Grid>
    </>
  );
}
