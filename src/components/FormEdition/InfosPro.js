import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext';

const useStyles = makeStyles((theme) => ({
  height: {
    height: 300
  },
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

function InfosPro () {
  const classes = useStyles();
  const { average_daily_rate, url_web_site, vat_number, phone_number, handleAdressFormChange } = useContext(EditionContext);

  return (
    <>
      <div className={classes.height}>
        <Grid container spacing={3} alignItems='flex-start'>
          <Grid item xs={12}>
            <TextField
              id='url_web_site' name='url_web_site' label='url site pro' value={url_web_site} fullWidth autoComplete='cc-projet'
              onChange={(e) => handleAdressFormChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems='flex-start'>
          <Grid item xs={12}>
            <TextField
              id='phone_number' name='phone_number' label='N° téléphone' value={phone_number}
              onChange={(e) => handleAdressFormChange(e)} fullWidth autoComplete='cc-projet'
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems='flex-start'>
          <Grid item xs={12}>
            <TextField
              id='vat_number' name='vat_number' label='Numéro de TVA' value={vat_number} fullWidth autoComplete='cc-projet'
              onChange={(e) => handleAdressFormChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems='flex-start'>
          <Grid item xs={12}>
            <TextField
              id='average_daily_rate' type='number' name='average_daily_rate' label='Taux journalier moyen en € HT' value={average_daily_rate} fullWidth autoComplete='cc-projet'
              onChange={(e) => handleAdressFormChange(e)}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default InfosPro;
