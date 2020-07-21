import React, { useState, useContext } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from '../API';
import AuthContext from '../components/AuthContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import decode from 'jwt-decode';
import { Helmet } from 'react-helmet';

const title = 'Connexion';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '50%'
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { saveToken, saveUser } = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { email, password };
    API.post('/users/connexion', payload).then((res) => {
      const decodedToken = decode(res.data.token);
      saveToken(res.data.token);
      saveUser(res.data.user);
      history.push(status ? '/compte' : `/detail/${res.data.user.freelance_id}`);
      // res.data.token;
    })
      .catch(err => {
        console.error(err);
        handleClickOpen();
      });
  };

  const handleConnexionClick = (e) => {
    API.get('/users/');
  };

  // Traitement du formulaire de demande de renvoi de l'email de validation
  const handleSubmitValidation = (event) => {
    event.preventDefault();
    const payload = { email };
    API.post('/users/renvoi_email_validation?email=' + email, payload)
      .then((res) => {
      })
      .catch(err => {
        handleClickOpen();
      });
      history.push('/reception_email');
  };

  // Récupération du paramètre passé dans l'url (connexion?statut=xxx)
  const location = useLocation();
  const search = location.search;
  const status = search.toString().substr(8); // ne garde que le paramètre
  const validation = {
    validated: '', // statut=validated
    revalidation: '', // statut=revalidation
    delayExceeded: '', // statut=delay_exceeded
    wrongKey: '', // statut=wrong_key
    displayForm: '' // en fonction de l'info de validation, il se peut que le formulaire n'ai aucune utilité et se trouve don caché
  };
  let newFreelance = '';
  status ? newFreelance = '' : newFreelance = 'none';
  status === 'validated' ? validation.validated = '' : validation.validated = 'none';
  status === 'revalidation' ? validation.revalidation = '' : validation.revalidation = 'none';
  if (status === 'delay_exceeded') {
    validation.delayExceeded = '';
    validation.displayForm = 'none';
  } else {
    validation.delayExceeded = 'none';
  }
  if (status === 'wrong_key') {
    validation.wrongKey = '';
    validation.displayForm = 'none';
  } else {
    validation.wrongKey = 'none';
  }

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div style={{ display: `${newFreelance}` }} className='alert-freelance-validation'>
        <h2>
          Information nouveau freelance
        </h2>
        <div style={{ display: `${validation.validated}` }} className='validated'>
          <p>Féliciation, tu peux maintenant te connecter à ton compte.</p>
          <p>N'oublie pas de compléter ta page personnelle afin d'être plus visible.</p>
        </div>
        <div style={{ display: `${validation.revalidation}` }} className='revalidation'>
          <p>Il semble que tu ais cliqué plusieurs fois de suite sur le lien pour valider ton adresse email.</p>
          <p>Pas de souci, tu peux te connecter à ton compte en utilisant le formulaire ci-dessous.</p>
          <p>N'oublie pas d'archiver ou d'effacer l'email...</p>
        </div>
        <div style={{ display: `${validation.delayExceeded}` }} className='delay-over'>
          <p>Oups ! le délai de validation de 2 jours est dépassé !</p>
          <p>Pas de souci, en renseignant l'adresse email qui t'a servi pour créer ton compte et en cliquant sur le lien ci-dessous, tu vas recevoir un nouveau message auquel tu devras répondre dans le deux jours !</p>
          <form className={classes.form} noValidate onSubmit={handleSubmitValidation}>
            <div>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='email'
                label='Adresse email'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={(e) => { setEmail(e.target.value); }}
              />
            </div>
            <div>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
                style={{ backgroundColor: 'var(--red)' }}
              >
                Envoyer de nouveau l'email de validation
              </Button>
            </div>
          </form>
        </div>
        <div style={{ display: `${validation.wrongKey}` }} className='wrong_key'>
          <p>Il semble qu'il y ait eu un petit souci lors de la validation.</p>
          <p>Tente de nouveau en cliquant sur le lien que tu as reçu par email en prenant garde à ne pas le modifier.</p>
        </div>
      </div>
      <Container style={{ display: `${validation.displayForm}` }} component='main' maxWidth='xs'>
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
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              style={{ backgroundColor: 'var(--red)' }}
              onClick={handleConnexionClick}
            >
              Se connecter
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/inscription' variant='body2'>
                  Vous n'avez pas de compte? S'inscrire
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
            <Button onClick={handleClose} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </div>
  );
}
