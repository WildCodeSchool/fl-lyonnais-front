import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../styles/Registration.scss';
import { validateEmail, isSiret } from '../functionshelper';
import axios from 'axios';

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

export default function SignUp () {
  const classes = useStyles();

  const [infosRegistration, setInfosRegistration] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    siret: 0
  });

  const handlesubmit = (e) => {
    // Function à créer pour gérer champs vides, sensibilité de la case
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/user';
    console.log(infosRegistration);
    if (validateEmail(infosRegistration.email) || isSiret(infosRegistration.siret)) {
      axios
        .post(url, infosRegistration)
        .then(res => res.data)
        .then(data => alert('yooooooooooo')
        )
        .catch(error => {
          console.log(error);
        });
    } else {
      alert('Champ manquant ou un email valide');
    }
  };

  return (
    <div>
      <div className='concept'>
        <h1>Freelance à Lyon inscris toi dans l'annuaire</h1>
        <br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid, at cum cumque deleniti eligendi
        error eveniet expedita, in minima molestias nesciunt pariatur quae qui quo quos tempore voluptas?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad cumque eos libero molestias
        necessitatibus numquam pariatur quas quo, sequi. Ab consequatur, delectus dolor hic nemo numquam quaerat!
        Ducimus, maiores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi, cumque dolorem enim, est fugiat
        id illum labore libero nesciunt nisi officiis quas quo quos recusandae voluptate? Est, rerum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et sunt tempora veniam. Aliquam animi
        asperiores, aspernatur facilis magnam minima minus neque optio, quidem sequi totam veritatis! Obcaecati
        officia, reiciendis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam aspernatur assumenda autem, esse
        et ipsum magnam modi odio quidem quo repudiandae sint, suscipit unde vel velit voluptates. Corporis, harum?
        </p>
      </div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
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
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label="J'accepte les conditions générales"
                />
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
                  Vous avez déjà un compte? Se connecter
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5} />
      </Container>
    </div>
  );
}
