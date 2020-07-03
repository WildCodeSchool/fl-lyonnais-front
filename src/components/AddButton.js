import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(13),
    right: theme.spacing(3)
  }
}));

export default function AddButton () {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title='Add' aria-label='add'>
        <Fab color='secondary' className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
