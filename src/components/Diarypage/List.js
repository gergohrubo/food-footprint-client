import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles, makeListStyle } from './style'

export default function NutrientsPage(props) {
  const classes = useStyles();
  const keyArray = Object.keys(props.nutrients)
  const valueArray = Object.values(props.nutrients)

  return (
    <div className={classes.rootList}>
      <List>
        {keyArray.map((name, index) => (
          <ListItem
            style={makeListStyle(valueArray[index]['percentOfDailyNeeds'])}
            key={keyArray[index]}
          >
            <ListItemText
              primary={<Typography>{name}</Typography>}
              secondary={
                <Typography>
                  {`${Number.parseFloat(valueArray[index]['amount']).toFixed(2)} ${valueArray[index]['unit']}`}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}