import React, { useContext } from 'react';
import { TextField, Paper, Button, Grid } from '@material-ui/core';
import EditionContext from '../EditionContext';

const AddTodo = (props) => {
  const { addReference, newReferenceName, setNewReferenceName } = useContext(EditionContext);
  // const hanleAddToDoName = (e) => {
  //   props.onInputChangeName();

  // }
const handleInputKeyPress = (e) => {
  const keycode = (e.keyCode ? e.keyCode : e.which);
  if (keycode == '13') {
      addReference()
  }
}
  return (
    <Paper style={{ margin: 16, padding: 16, minWidth: '500px' }}>
      <Grid container>
        <Grid xs={9} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder='Nom du projet'
            value={newReferenceName}
            onChange={(e) => setNewReferenceName(e.target.value)}
            onKeyPress={handleInputKeyPress}
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
