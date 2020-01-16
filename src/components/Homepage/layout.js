import React from 'react';
import { Fade, Button, Typography, IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from './style'

const Homepage = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Fade in={true}>
        <div>
          <IconButton aria-label="logout" onClick={props.logOut} className={classes.logOutBtn}>
            <ExitToAppIcon />
          </IconButton>
          <Typography variant="h2" className={classes.title}>
            Welcome to your food diary, {props.user.username}!
    </Typography>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => props.history.push('/upload')}
            >
              Upload a new meal
      </Button>
            <Button
              onClick={() => props.history.push('/diary')}
            >
              Check your diary
      </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Homepage;