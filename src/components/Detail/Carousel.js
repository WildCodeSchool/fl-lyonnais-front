import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import avatar from '../../images/logo2.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '300px',
    height: '375px',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  divImg: {
    height: 'auto',
    display: 'block',
    maxWidth: 400,
    width: '100%'
  },
  img: {
    height: 'auto',
    display: 'block',
    width: '100%',
    objectFit: 'cover'
  }
}));

function SwipeableTextMobileStepper (props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.references.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <h2 className='detailh2'>Références</h2>
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{props.references[activeStep].name}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ overflowY: 'hidden' }}
        >
          {props.references.map((step, index) => (
            <div key={step.label} className={classes.divImg}>
              {Math.abs(activeStep - index) <= 2 ? (
                <a href={step.url} target="_blank"><img
                  className={classes.img} src={
                    !step.image ? avatar : (step.image.substr(0, 4) === 'http') ? step.image : process.env.REACT_APP_API_URL + '/' + step.image
                  } alt={step.name}
                />
                </a>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position='static'
          variant='text'
          activeStep={activeStep}
          nextButton={
            <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>

              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

            </Button>
          }
        />
      </div>
    </div>

  );
}

export default SwipeableTextMobileStepper;
