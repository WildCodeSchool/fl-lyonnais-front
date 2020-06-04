import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

export default function SearchBar () {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <div className={classes.margin}>
          <Grid container spacing={0} alignItems='flex-end' justify='center'>
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <TextField id='standard-name' label='Recherche' value={name} onChange={handleChange} />
            </Grid>
          </Grid>
        </div>
      </div>
    </form>
  );
}
