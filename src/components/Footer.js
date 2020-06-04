import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer'>
        <Link className='footerLink' to='/'>Accueil</Link>
        <Link className='footerLink' to='/listing'>Freelances à Lyon</Link> 
        <Link className='footerLink' to='/aproposde'>À propos</Link> 
        <Link className='footerLink' to='/legaldisclaimer'>Mentions légales</Link> 
      </footer>
    );
  }
}

export default Footer;
