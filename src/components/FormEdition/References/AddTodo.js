import React, { memo, useContext } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import EditionContext from '../EditionContext';


const AddTodo = (props) => (

  
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={9} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Nom du projet"
          value={props.inputValueName}
          onChange={props.onInputChangeName}
          onKeyPress={props.onInputKeyPressName}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidt
          color="primary"
          variant="outlined"
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default AddTodo;
