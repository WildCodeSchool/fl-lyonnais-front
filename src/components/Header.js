import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

  
export default function PrimarySearchAppBar (props) {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const baseURL = process.env.REACT_APP_API_URL;

  // Traitement du champ de recherche
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const searchTable = search.split(' ');
    const searchList = searchTable.join(';');
    console.log(searchTable);
    const apiUrl = baseURL + '/search?recherche=' + searchList;
    console.log('URL pour axios : ', apiUrl);
    axios.get(apiUrl)
      .then((searchResults) => {
        const searchResultsTable = searchResults.data.searchResults
        console.log(searchResultsTable);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: 'var(--blue)' }}>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/'>Freelances Lyonnais</Link>
          </Typography>
          <form className={classes.form} noValidate  onSubmit={handleSubmitSearch}>
            <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            id='search'
            label='Recherche...'
            name='search'
            autoComplete='search'
            autoFocus
            value={search}
            onChange={(e) => { setSearch(e.target.value); }}
            />
          </form>
          <div className={classes.grow} />
          <div>
            <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/inscription'>M'inscrire</Link></Button>
            <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/connexion'>Me connecter</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
