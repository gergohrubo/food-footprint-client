import React from 'react';
import { Fade, Backdrop, Modal, Typography, Link } from '@material-ui/core'
import { useStyles, ColorButton, ColorTextField } from './styles'

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Sign up to use the app
          </Typography>
            <form onSubmit={props.onSubmitIngredient}>
              <ColorTextField
                label="Username"
                fullWidth
                name="username"
                value={props.username}
                onChange={props.onChange}
                className={classes.textField}
              />
              <ColorTextField
                label="Email"
                fullWidth
                name="email"
                value={props.email}
                onChange={props.onChange}
                className={classes.textField}
              />
              <ColorTextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={props.password}
                onChange={props.onChange}
                className={classes.textField}
              />
              <ColorButton
                variant="contained"
                type="submit"
                onClick={props.onSubmit}
              >
                Sign up
    </ColorButton>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};