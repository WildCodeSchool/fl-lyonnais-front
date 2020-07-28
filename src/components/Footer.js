import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import FaceIcon from '@material-ui/icons/Face';

export default function LabelBottomNavigation () {
  const [value, setValue] = React.useState('recents');

  const pathMap = [
    '/',
    '/liste_freelance/',

    '/mentions_legales'
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={{ backgroundColor: 'var(--blue)', fontSize: '0.55rem' }} value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Accueil' value='Accueil' icon={<HomeIcon />} component={Link} to={pathMap[0]} />
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Freelances' value='Freelances à Lyon' icon={<FaceIcon />} component={Link} to={pathMap[1]} />
      <BottomNavigationAction style={{ color: 'var(--white)', padding: '6px 0px' }} label='Mentions légales' value='Mentions légales' icon={<GavelIcon />} component={Link} to={pathMap[2]} />
    </BottomNavigation>
  );
}
