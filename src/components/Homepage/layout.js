import React from 'react';
import { Fade, Button, Typography } from '@material-ui/core'
import { ColorButton } from './styles'

const Homepage = (props) => {
  return (
    <div>
      <Fade in={true}>
        <div>
          <Typography>
            Welcome to my Food-app!
    </Typography>

          <ColorButton
            onClick={() => props.history.push('/upload')}
          >
            Upload a new meal
      </ColorButton>
        </div>
      </Fade>
    </div>
  );
};

export default Homepage;