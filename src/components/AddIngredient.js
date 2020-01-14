import React from 'react';
import { Fade, Link, Backdrop, Modal, Typography, Zoom } from '@material-ui/core'
import { useStyles, ColorButton, ColorTextField } from './AddIngredientStyle'

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
      <Zoom in={props.listOfIngredients.length > 0}>
        <Typography>
          {`Can't`} find what you are looking for? <Link href="#" onClick={handleOpen}>Add a new ingredient</Link>
        </Typography>
      </Zoom>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={props.onSubmitIngredient} className={classes.paper}>
            <ColorTextField
              label="New Ingredient"
              name="ingredient"
              value={props.ingredient}
              onChange={props.onChange}
              variant="outlined"
              className={classes.textField}
            />
            <ColorButton
              variant="contained"
              type="submit"
              onClick={handleClose}
            >
              Add ingredient
      </ColorButton>
          </form>
        </Fade>
      </Modal>
      <Zoom in={props.listOfIngredients.length > 0}>
        <ColorButton
          variant="contained"
          onClick={props.onSubmitRecipe}
        >
          Send the ingredients
      </ColorButton>
      </Zoom>
    </div>
  );
}