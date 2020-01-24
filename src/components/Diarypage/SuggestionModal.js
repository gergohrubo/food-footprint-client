import React from 'react';
import { Fade, Backdrop, Modal, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { modalClass, modalStyle } from '../../theme'

export default function RecipeNameModal(props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalClass}
        open={props.modalOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalOpen}>
          <div style={modalStyle}>
            <Typography variant="h4">
              This is what you should eat to meet your daily needs on Calories, Protein and Vitamin C
          </Typography>
            <List>
              {props.suggestions && props.suggestions.map(suggestion => (
                <ListItem key={suggestion.title}>
                  <ListItemText
                    primary={<Typography>{suggestion.title}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              onClick={props.handleClose}
            >
              Close
                </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}