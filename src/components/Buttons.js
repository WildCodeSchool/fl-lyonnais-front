import React, { useContext } from 'react';
import EditionContext from './FormEdition/EditionContext';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import API from '../API';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white
  },
  checked: {}
}))(Switch);

export default function Buttons (props) {
  const { sendFlDatasToFormEdition } = useContext(EditionContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: true
  });
  const idFl = props.id;
  const handleEditButClcik = () => {
    API.get(`./freelances/${idFl}`)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        sendFlDatasToFormEdition(data);
      });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Supprimer
      </Button>
      <Button
        onClick={handleEditButClcik}
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<EditIcon />}
      >
        <Link style={{ color: 'var(--white)' }} to='/compte'>Éditer</Link>
      </Button>
      <Typography component='div'>
        <Grid component='label' container alignItems='center' spacing={1}>
          <Grid item>Désactiver</Grid>
          <Grid item>
            <AntSwitch checked={state.checked} onChange={handleChange} name='checked' />
          </Grid>
          <Grid item>Activer</Grid>
        </Grid>
      </Typography>
    </div>
  );
}
