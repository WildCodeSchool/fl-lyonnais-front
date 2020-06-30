import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import EditionContext from './EditionContext'

const useStyles = makeStyles((theme) => ({
  height: {
    height: 300
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function InfosPro() {
  const classes = useStyles();
  const { url_web_site, vat_number, phone_number, handleAdressFormChange } = useContext(EditionContext);
  return (
    <React.Fragment>
      <div className={classes.height}>
        <Typography variant="h6" gutterBottom>
          {/* Order summary */}
        </Typography>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12}>
            <TextField required id="projet1" name="url_web_site" label="url site pro" value={url_web_site} fullWidth autoComplete="cc-projet" 
            onChange={(e) => handleAdressFormChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12}>
            <TextField required id="projet1" type="number" name="phone_number" label="N° téléphone" value={phone_number} 
            onChange={(e) => handleAdressFormChange(e)}fullWidth autoComplete="cc-projet" />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12}>
            <TextField required id="projet1" type="number" name='vat_number' label="Numéro de TVA" value={vat_number} fullWidth autoComplete="cc-projet" 
            onChange={(e) => handleAdressFormChange(e)}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}