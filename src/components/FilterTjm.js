import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    width: '80%'
  }
});

function valuetext (value) {
  return `${value}€`;
}

export default function DiscreteSlider () {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginLeft: 30, marginBottom: 30 }}>
      <Typography id='discrete-slider' gutterBottom style={{ marginBottom: 35, fontFamily: 'balooBhaina2Regular' }}>
       -  TJM en euros €  +
      </Typography>
      <Slider
        style={{}}
        defaultValue={500}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={100}
        marks
        min={0}
        max={2500}
      />
    </div>
  );
}
