import React, { createRef, useContext } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UploadButtons from '../UploadButtons';
import EditionContext from '../EditionContext';

import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = (props) => {
  const { handleFile } = useContext(EditionContext)
  const projectURLRef = createRef();
  const handleURLClick = (e) => {
    console.log(e)
    handleFile(e.target.files);
  }
  return (
    <Grid container spacing={3}>

      <Grid item xs={12 } justifyContent='center'>
        <ListItem divider={props.divider}>
          <ListItemText primary={props.text}  />
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
        
        <input type="file" onClick={(e) => {handleURLClick(e)}} projectRef={projectURLRef}/>
        {/* <div>
        <UploadButtons className='Photo du projet' />
        </div> */}
      </Grid>

    </Grid>
  )
};

export default TodoListItem;
