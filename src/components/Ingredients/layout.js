import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './style'
import { Zoom } from '@material-ui/core'

export default function Ingredients(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {props.ingredients
          .map(ingredient => (
            <Zoom
              in={true}
              key={ingredient.id}
            >
              <Chip
                key={ingredient.name}
                label={ingredient.name}
                onDelete={() => props.onDelete(ingredient.id)}
              />
            </Zoom>
          ))}
      </div>
    </div>
  );
}