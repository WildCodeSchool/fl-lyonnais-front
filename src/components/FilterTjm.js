import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
});

function valuetext(value) {
  return `${value}€`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 350]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ marginLeft: 30, marginBottom: 30 }}>
      <Typography id="range-slider" gutterBottom style={{ marginBottom: 35, fontFamily: 'balooBhaina2Regular' }}>
        TJM
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={100}
        marks
        min={0}
        max={2500}
      />
    </div>
  );
}
