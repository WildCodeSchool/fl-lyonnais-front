import React, { memo } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UploadButtons from '../UploadButtons';

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = memo(props => (
  <Grid container spacing={3}>

    <Grid item xs={12 } justifyContent='center'>
      <ListItem divider={props.divider}>
        <ListItemText primary={props.text} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Grid>

    <Grid item xs={12}>
      {/* <Typography variant='h6' gutterBottom color='primary'>
        Photo des projets
      </Typography> */}
      <UploadButtons className='Photo du projet' />
    </Grid>

  </Grid>

));

export default TodoListItem;
