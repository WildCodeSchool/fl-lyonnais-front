import React, { useContext } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import EditionContext from '../EditionContext';

const AddTodo = (props) => {
  const { addReference } = useContext(EditionContext);

  return (
    <Paper style={{ margin: 16, padding: 16, minWidth: '500px' }}>
      <Grid container>
        <Grid xs={9} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder='Nom du projet'
            value={props.inputValueName}
            onChange={props.onInputChangeName}
            onKeyPress={props.onInputKeyPressName}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidt
            color='primary'
            variant='outlined'
            onClick={() => { addReference(props.inputValueName); }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
