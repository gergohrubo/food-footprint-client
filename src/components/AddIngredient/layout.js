import React from 'react';
import { Fade, Link, Backdrop, Modal, Typography, Zoom, TextField, Button } from '@material-ui/core'
import { modalClass, modalStyle } from '../../theme'
import { useStyles } from './style'

export default function AddIngredients(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Zoom in={props.listOfIngredients.length > 0 || true}>
        <div>
          <Typography gutterBottom className={classes.text}>
            {`Can't`} find what you are looking for? <Link href="#" onClick={handleOpen}>Add a new ingredient</Link>
          </Typography>
          <Typography gutterBottom className={classes.text}>
            or
        </Typography>
        </div>
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
      <Zoom in={props.listOfIngredients.length > 0 || true}>
        <Button
          onClick={props.onSubmitRecipe}
        >
          Send the ingredients
      </Button>
      </Zoom>
    </div>
  );
}