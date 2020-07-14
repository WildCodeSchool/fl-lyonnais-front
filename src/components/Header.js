import React, { useState, useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from './AuthContext';
import SearchContext from './Detail/SearchContext'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
  const { uploadSearch } = useContext(SearchContext);
  const baseURL = process.env.REACT_APP_API_URL;
  const history = useHistory();

  // Traitement du champ de recherche
  const handleSubmitSearch = (event) => {
    event.preventDefault();

    // Utilise les espaces comme séparateur dans le champ de recherche
    // Puis les remplace par un point-virgule dans l'URL
    // De plus, les espace et autres caractères du même acabit, en trop, sont éliminés.
    let searchList = search.split(/\W+/).join(';');

    const apiUrl = baseURL + '/search?recherche=' + searchList;
    axios.get(apiUrl)
      .then((searchResults) => {
        const searchResultsTable = searchResults.data.searchResults
        uploadSearch(searchResultsTable);
        // console.log('résultat de la recherche',searchResultsTable)
        history.push('/liste_freelance')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const setTokenInLocalStorage = useContext(AuthContext).setToken;
  const setUserInLocalStorage = useContext(AuthContext).saveUser;
  const isConnected = !!useContext(AuthContext).token;
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    setUserInLocalStorage('{}');
    setTokenInLocalStorage('');
  }
  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: 'var(--blue)' }}>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/'>Freelances Lyonnais</Link>
          </Typography>
          <form className={classes.form} noValidate  onSubmit={handleSubmitSearch}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Recherche…'
              value={search}
              onChange={(e) => { setSearch(e.target.value); }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </form>
          <div className={classes.grow} />
          <div>
            { isConnected && user && user.freelance_id && <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to={`/detail/${user.freelance_id}`}>Mon Compte</Link></Button>}

            {isConnected && <Button color='inherit'><Link onClick={handleLogout} style={{ textDecoration: 'none', color: 'var(--white)' }} to='/connexion'>Déconnexion</Link></Button>}

            {!isConnected && 
            <>
              <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/inscription'>Inscription</Link></Button>
              <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/connexion'>Connexion</Link></Button>
            </>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
