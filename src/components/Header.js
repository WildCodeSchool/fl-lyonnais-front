import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import AuthContext from './AuthContext';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import EditionContext from '../components/FormEdition/EditionContext';
import SearchContext from './Detail/SearchContext';
const queryString = require('query-string');

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
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
}));

export default function PrimarySearchAppBar (props) {
  const classes = useStyles();
  const { search, updateSearch, currentPage, freelancesPerPage } = useContext(SearchContext);
  const { freelanceId } = useContext(EditionContext);
  const history = useHistory();

  // Traitement du champ de recherche
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    updateSearch(search);
    history.push('/liste_freelance/' + 'page=' + currentPage + '&flperpage=' + freelancesPerPage + '&search[0]=' + search)
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
              onChange={(e) => { updateSearch(e.target.value); }}
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
            { (isConnected  && (user.freelance_id || freelanceId )) && <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to={ user.freelance_id ? `/detail/${user.freelance_id}` : `/detail/${freelanceId}`}>Mon Compte</Link></Button>}
            <Button color='inherit'><Link style={{ textDecoration: 'none', color: 'var(--white)' }} to='/liste_freelance'>Freelances</Link></Button>

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
