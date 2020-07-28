import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validateEmail, isSiret, onlyLetters, isPwMore8cha } from '../functionshelper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import API from '../API';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Helmet } from 'react-helmet';

const title = 'Inscription';

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [openPasswordsNotEqual, setOpenPasswordsNotEqual] = useState(false);
  const [openErrorDuplicateEmail, setOpenErrorDuplicateEmail] = useState(false);
  const [openErrorSiretFormat, setOpenErrorSiretFormat] = useState(false);
  const [checkboxModalError, setCheckboxModalError] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [infosRegistration, setInfosRegistration] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    siret: ''
  });

  useEffect(() => {
    // Permet d'avoir le bon état par défaut
    setChecked(false);
  }, []);

  const handleCheckbox = (e) => {
    setChecked(!checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenPasswordsNotEqual = () => {
    setOpenPasswordsNotEqual(true);
  };

  const handleClosePasswordsNotEqual = () => {
    setOpenPasswordsNotEqual(false);
  };
  const handleOpenErrorSiretFormat = () => {
    setOpenErrorSiretFormat(true);
  }

  const handlCloseErrorSiretFormat = () => {
    setOpenErrorSiretFormat(false);
  }

  const handleOpenErrorDuplicateEmail = () => {
    setOpenErrorDuplicateEmail(true);
  };

  const handleCloseErrorDuplicateEmail = () => {
    setOpenErrorDuplicateEmail(false);
  };

  const handleOpenCGError = () => {
    setCheckboxModalError(true);
  }

  const handleCloseCGError = () => {
    setCheckboxModalError(false);
  }
  const handlesubmit = (e) => {
    // Function à créer pour gérer champs vides, sensibilité de la case
    e.preventDefault();
    if (!isPwMore8cha(infosRegistration.password)) {
      handleClickOpen();
    } else if (infosRegistration.password !== infosRegistration.passwordConfirmation) {
      handleClickOpenPasswordsNotEqual();
    } else if (!isSiret(infosRegistration.siret)) {
      handleOpenErrorSiretFormat();
    } else if (!checked) {
      handleOpenCGError();
    }
    else {
      const registration_date = new Date().toISOString().slice(0, 10);
      if (validateEmail(infosRegistration.email) && isSiret(infosRegistration.siret) && onlyLetters(infosRegistration.firstname) && onlyLetters(infosRegistration.lastname) && checked) {
        const payload = { ...infosRegistration, registration_date };
        API.post('/users', payload)
          .then(res => res.data)
          .then(data => {
            history.push('/reception_email');
          })
          .catch(error => {
            console.log(error);
            handleOpenErrorDuplicateEmail();
          });
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Avatar style={{ backgroundColor: 'var(--red)' }} className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Inscription
          </Typography>
          <form className={classes.form} noValidate onSubmit={handlesubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='Prénom'
                  autoFocus
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, firstname: e.target.value })}
                  value={infosRegistration.firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Nom de famille'
                  name='lastName'
                  autoComplete='lname'
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, lastname: e.target.value })}
                  value={infosRegistration.lastname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Adresse e-mail'
                  name='email'
                  autoComplete='email'
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, email: e.target.value })}
                  value={infosRegistration.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Mot de passe'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, password: e.target.value })}
                  value={infosRegistration.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password Confirmation'
                  label='Confirmation du mot de passe'
                  type='password'
                  id='passwordConfirmation'
                  autoComplete='current-password'
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, passwordConfirmation: e.target.value })}
                  value={infosRegistration.passwordConfirmation}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='siret'
                  label='Siret'
                  type='siret'
                  id='siret'
                  autoComplete='siret'
                  onChange={(e) => setInfosRegistration({ ...infosRegistration, siret: e.target.value })}
                  value={infosRegistration.siret}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color='primary' />}
                  onChange={handleCheckbox}
                  value={checked}
                  required
                />
                J'accepte les <Link to='/conditions_generales'> conditions générales</Link>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              style={{ backgroundColor: 'var(--red)' }}
              to='/edition_compte'
            >
              Créer ma fiche freelance
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/connexion' variant='body2'>
                  Vous avez déjà un compte ? Se connecter
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5} />
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Mot de passe : </DialogTitle>
          <DialogContent>
            <DialogContentText>
              8 caractères minimum sont recquis.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
        {/* Lorsque les deux mots de passe ne correspondent pas */}
        <Dialog
          fullScreen={fullScreen}
          open={openPasswordsNotEqual}
          onClose={handleClosePasswordsNotEqual}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Mot de passe : </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Les mots de passe ne sont pas identiques.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePasswordsNotEqual} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
        {/* Affiche une modale : email déjà présent dans la BDD */}
        <Dialog
          fullScreen={fullScreen}
          open={openErrorDuplicateEmail}
          onClose={handleCloseErrorDuplicateEmail}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Adresse e-mail : </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cette adresse e-mail est déjà utilisée.
              Merci d'en choisir une autre, valide.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseErrorDuplicateEmail} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
        {/* Affiche une modale : siret non conforme */}
        <Dialog
          fullScreen={fullScreen}
          open={openErrorSiretFormat}
          onClose={handleOpenErrorSiretFormat}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Numéro de siret : </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Merci de renseigner un numéro de siret conforme.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlCloseErrorSiretFormat} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
        {/* Affiche une modale : conditions générales non acceptées*/}
        <Dialog
          fullScreen={fullScreen}
          open={checkboxModalError}
          onClose={handleOpenErrorSiretFormat}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Conditions générales : </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Merci de cocher la case relative à l'acceptation des conditions générales
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCGError} color='primary' autoFocus>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}
