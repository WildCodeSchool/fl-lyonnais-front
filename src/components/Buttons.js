import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Link, useHistory } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import API from '../API'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'


export default function Buttons (props) {
  const useStyles = makeStyles((theme) => ({ button: { margin: theme.spacing(1) } }));
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({ checkedA: true, });
  const handleChange = (event) => {setState({ ...state, [event.target.name]: event.target.checked });};
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false);};

  const handleDelete = (e) => {
    API.delete('/freelances/' + props.id + '?deleted=1')
      .then((res) => {
        history.push(`/connexion`)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Supprimer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation de la suppression"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Etes-vous sûr de vouloir supprimer votre compte ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Oui, Supprimer
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        startIcon={<EditIcon />}
      >
        <Link style={{ color: 'var(--white)' }} to='/compte'>Éditer</Link>
      </Button>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
        label="Désactiver / Activer"
        labelPlacement="top"
      />
    </div>
  );
}
