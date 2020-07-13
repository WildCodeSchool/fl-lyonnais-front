import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Recherche…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
