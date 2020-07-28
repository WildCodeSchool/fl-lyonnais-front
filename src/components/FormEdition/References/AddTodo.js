import React, { useContext } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import EditionContext from '../EditionContext';

const AddTodo = (props) => {
  const { addReference, newReferenceName, setNewReferenceName } = useContext(EditionContext);

  const handleInputKeyPress = (e) => {
    const keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13' && e.target.value) {
      addReference();
    }
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={9} md={11} item style={{ paddingRight: 16, maxWidth: 'calc(100% - 90px)' }}>
          <TextField
            placeholder='Nom du projet'
            value={newReferenceName}
            onChange={(e) => setNewReferenceName(e.target.value)}
            onKeyPress={handleInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          {newReferenceName ?
            <Button
              fullWidt
              color='primary'
              variant='outlined'
              onClick={() => { addReference(newReferenceName); }}
            >
              Ajouter
            </Button>
            :
            <Button
              fullWidt
              color='primary'
              variant='outlined'
              style={{ backgroundColor: 'grey', color: 'white' }}
            >
              Ajouter
            </Button>}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;