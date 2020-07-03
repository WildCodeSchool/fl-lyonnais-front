import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn (props) {
  const { saveToken } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { email, password };
    const url = process.env.REACT_APP_API_URL + '/users/connexion';
    axios.post(url, payload).then((res) => {
      history.push('/');
      alert('Vous etes connectés à votre compte et allez être redirigé vers votre page de détail')
      saveToken(res.data.token);
    })
      .catch(err => alert('erreur sur les identifiants'));
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar style={{ backgroundColor: 'var(--red)' }} className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
          Connexion
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Adresse email'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Mot de passe'
              type='password'
              id='password'
              autoComplete='current-password'
              vlaue={password}
              onChange={(e) => { setPassword(e.target.value); }}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Se souvenir de moi'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              style={{ backgroundColor: 'var(--red)' }}
            >
            Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='#' variant='body2'>
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/inscription' variant='body2'>
                  {"Vous n'avez pas de compte? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
