import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function Ingredients(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {props.ingredients
          .map(ingredient => (
            <Chip
              key={ingredient.id}
              label={`${ingredient.name}, ${ingredient.value}`}
              onClick={props.onClick}
              onDelete={() => props.onDelete(ingredient.id)}
            />
          ))}
      </div>
    </div>
  );
}