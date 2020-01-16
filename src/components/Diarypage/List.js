import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './style'

export default function NutrientsPage(props) {
  const classes = useStyles();
  const keyArray = Object.keys(props.nutrients)
  const valueArray = Object.values(props.nutrients)

  const makeListStyle = percent => ({
    background: `linear-gradient(to left, #a8e063, #1d170c)`,
    backgroundSize: `${percent}% 20%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom"
  })

  return (
    <div className={classes.rootList}>
      <List>
        {keyArray.map((name, index) => (
          <ListItem style={makeListStyle(valueArray[index]['percentOfDailyNeeds'])}>
            <ListItemText
              primary={<Typography>{name}</Typography>}
              secondary={<Typography>{`${Number.parseFloat(valueArray[index]['amount']).toFixed(2)} ${valueArray[index]['unit']}`}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}