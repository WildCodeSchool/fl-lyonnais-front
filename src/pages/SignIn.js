import React, { useState, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // console.log(props.location.search);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      history.push(`/detail/${res.data.data.id}`);
      console.log(res.data);
      // res.data.token;
      saveToken(res.data.token);
    })
      .catch(err => {
        handleClickOpen();
      });
  };
  const { status } = useParams();
  console.log(status);
  const newFreelance = '';
  const validated = '';
  // (!status ? newFreelance = '' : newFreelance = 'none');
  // (status === 'validated' ? validated = '' : validated = 'none');
  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <div style={{ display: `${newFreelance}` }} className='alert-freelance-validation'>
          <Typography component='h2' variant='h5'>
          Information nouveau freelance
          </Typography>
          <div style={{ display: `${validated}` }} className='validated'>
          La validation de ton email s'est bien passée, tu peux maintenant te connecter à ton compte
          </div>
          <div className='delay-over'>
          Délai de validation de 2 jours dépassé.
          </div>
        </div>
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
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Problème de connexion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Les identifiants renseignés sont incorrects.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={handleClose} color="primary">
              Disagree
          </Button> */}
            <Button onClick={handleClose} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </div>
  );
}
