import React from 'react';
import { Fade, Backdrop, Modal, Typography, Link, TextField, Button } from '@material-ui/core'
import { modalClass, modalStyle } from '../../theme'

export default function Layout(props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalClass}
        open={props.modalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <div style={modalStyle}>
            <Typography variant="h6" gutterBottom>
              Please login to use the app!
          </Typography>
            <form onSubmit={props.onSubmitIngredient}>
              <TextField
                label="Username"
                fullWidth
                name="username"
                value={props.username}
                onChange={props.onChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={props.password}
                onChange={props.onChange}
              />
              <Typography gutterBottom>
                Don't have an account yet? <Link href="#" onClick={() => props.callForSignup(true)}>Sign up!</Link>
              </Typography>
              <Button
                type="submit"
                onClick={props.onSubmit}
              >
                Login
    </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};