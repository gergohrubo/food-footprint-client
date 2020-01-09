import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: '5vw',
    marginTop: '5vw',
    width: '40vw',
    height: '40vw',
    borderRadius: 2,
    backgroundColor: '#e9ffe3',
    color: '#c7fff4',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    alignItems: 'center',
    display: 'table',
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%'
  }
}))

export default function Ingredients(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {props.ingredients.map(ingredient => (
          <Chip
            key={ingredient.id}
            label={ingredient.name}
            onClick={props.onClick}
            onDelete={props.onDelete}
          />
        ))}
      </div>
    </div>
  );
}