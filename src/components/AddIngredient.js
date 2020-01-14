import React from 'react';
import { Fade, Link, Backdrop, Modal, Typography, Zoom, TextField, Button } from '@material-ui/core'
import { modalClass, modalStyle } from '../theme'

export default function AddIngredients(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Zoom in={props.listOfIngredients.length > 0}>
        <Typography>
          {`Can't`} find what you are looking for? <Link href="#" onClick={handleOpen}>Add a new ingredient</Link>
        </Typography>
      </Zoom>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalClass}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={props.onSubmitIngredient} style={modalStyle}>
            <TextField
              label="New Ingredient"
              name="ingredient"
              value={props.ingredient}
              onChange={props.onChange}
              variant="outlined"
            />
            <Button
              type="submit"
              onClick={handleClose}
            >
              Add ingredient
      </Button>
          </form>
        </Fade>
      </Modal>
      <Zoom in={props.listOfIngredients.length > 0}>
        <Button
          onClick={props.onSubmitRecipe}
        >
          Send the ingredients
      </Button>
      </Zoom>
    </div>
  );
}