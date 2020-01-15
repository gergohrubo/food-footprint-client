import React from 'react';
import { Fade, Backdrop, Modal, Typography, IconButton, Button, TextField } from '@material-ui/core'
import { modalClass, modalStyle } from '../../theme'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export default function RecipeNameModal(props) {
  const [name, setName] = React.useState(props.recipes[0]['title']);
  const [textfield, setTextfield] = React.useState('');
  const onChange = event => {
    setTextfield(event.target.value)
  }
  const nextName = () => {
    const index = props.recipes.findIndex(recipe => recipe['title'] === name)
    const newName = index === (props.recipes.length - 1) ? null : props.recipes[index + 1]['title']
    setName(newName);
  };

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
        <Fade in={props.modalOpen}>
          <div onSubmit={props.onSubmitIngredient} style={modalStyle}>
            {name
              ?
              <div>
                <Typography gutterBottom>
                  Do you mean you had a {name} ?
            </Typography>
                <IconButton aria-label="yes" onClick={() => props.acceptRecipe(name)}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton aria-label="no" onClick={nextName}>
                  <CancelIcon />
                </IconButton>
              </div>
              :
              <div>
                <Typography>
                  Then I {`don't`} know <span role="img" aria-label="sadface">😕</span>
                </Typography>
                <Typography gutterBottom>
                  Please tell me:
                </Typography>
                <TextField
                  label="The recipe name"
                  name="recipe"
                  value={textfield}
                  onChange={onChange}
                  variant="outlined"
                />
                <Button
                  onClick={() => props.acceptRecipe(textfield)}
                >
                  Set recipe name
                </Button>
              </div>
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}