import React from 'react';
import { Fade, Button, Typography } from '@material-ui/core'

const Homepage = (props) => {
  return (
    <div>
      <Fade in={true}>
        <div>
          <Typography>
            Welcome to my Food-app!
    </Typography>
          <Button
            onClick={() => props.history.push('/upload')}
          >
            Upload a new meal
      </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Homepage;