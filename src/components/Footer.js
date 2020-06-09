import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import InfoIcon from '@material-ui/icons/Info';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const pathMap = [
  '/',
  '/listing',
  '/aproposde',
  '/legaldisclaimer'
];

export default function LabelBottomNavigation () {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={{ backgroundColor: '#1730FF' }} value={value} onChange={handleChange} className={classes.stickToBottom} showLabels>
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label='Accueil' value='Accueil' icon={<HomeIcon />} component={Link} to={pathMap[0]} />
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label='Freelances à Lyon' value='Freelances à Lyon' icon={<FaceIcon />} component={Link} to={pathMap[1]} />
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label='A propos' value='A propos' icon={<InfoIcon />} component={Link} to={pathMap[2]} />
      <BottomNavigationAction style={{ color: '#FFFFFF' }} label='Mentions légales' value='Mentions légales' icon={<GavelIcon />} component={Link} to={pathMap[3]} />
    </BottomNavigation>
  );
}
