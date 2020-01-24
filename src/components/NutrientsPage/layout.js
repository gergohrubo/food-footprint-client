import React from 'react';
import { Typography, Button } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, makeListStyle } from './styles'

export default function NutrientsPage(props) {
  const classes = useStyles();
  const keyArray = Object.keys(props.nutrients)
  const valueArray = Object.values(props.nutrients)
  const title = props.recipes.length > 0 && props.recipes[0]['title']

  return (
    <div>
      <Typography variant="h5">
        These are the nutritions you got from your {`${title}`}
      </Typography>
      <div className={classes.root}>
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
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => props.onClick('/diary')}
        >
          See my diary
      </Button>
        <Button
          onClick={() => props.onClick('/')}
        >
          Go to homepage
      </Button>
      </div>
    </div>
  );
}