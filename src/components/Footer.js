import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <Link to='/'>Accueil | </Link>
        <Link to=''>Freelances à Lyon | </Link> 
        <Link to=''>À propos | </Link> 
        <Link to=''>Mentions légales</Link> 
      </footer>
    );
  }
}

export default Footer;
