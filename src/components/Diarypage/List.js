import React from 'react';
import { Typography, Button } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './styles'

export default function NutrientsPage(props) {
  const classes = useStyles();
  const keyArray = Object.keys(props.nutrients)
  const valueArray = Object.values(props.nutrients)
  const title = props.recipes.length > 0 && props.recipes[0]['title']

  const makeListStyle = percent => ({
    background: `linear-gradient(to left, #a8e063, #1d170c)`,
    backgroundSize: `${percent}% 20%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom"
  })

  return (
    <div>
      <Typography variant="h5">
        These are the nutritions you got from your {`${title}`}
      </Typography>
      <div className={classes.root}>
        <List>
          {keyArray.map((name, index) => (
            <ListItem style={makeListStyle(valueArray[index]['percentOfDailyNeeds'])}>
              <ListItemText
                primary={<Typography>{name}</Typography>}
                secondary={<Typography>{`${valueArray[index]['amount']} ${valueArray[index]['unit']}`}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={() => props.onClick('/')}
        >
          Go to homepage
      </Button>
      </div>
    </div>
  );
}