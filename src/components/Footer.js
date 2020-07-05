import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import InfoIcon from '@material-ui/icons/Info';
import FaceIcon from '@material-ui/icons/Face';

const pathMap = [
  '/',
  '/liste_freelance',
  '/aproposde',
  '/mentions_legales'
];

export default function LabelBottomNavigation () {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={{ backgroundColor: 'var(--blue)', fontSize: '0.55rem' }} value={value} onChange={handleChange} showLabels> {/* à revoir plus tard */}
      <BottomNavigationAction style={{ color: 'var(--white)' }} label='Accueil' value='Accueil' icon={<HomeIcon />} component={Link} to={pathMap[0]} />
      <BottomNavigationAction style={{ color: 'var(--white)' }} label='Freelances' value='Freelances à Lyon' icon={<FaceIcon />} component={Link} to={pathMap[1]} />
      <BottomNavigationAction style={{ color: 'var(--white)' }} label='A propos' value='A propos' icon={<InfoIcon />} component={Link} to={pathMap[2]} />
      <BottomNavigationAction style={{ color: 'var(--white)' }} label='Mentions légales' value='Mentions légales' icon={<GavelIcon />} component={Link} to={pathMap[3]} />
    </BottomNavigation>
  );
}
