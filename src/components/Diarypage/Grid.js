import React from 'react';
import { Card, Container, Typography, Grid, CardContent, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles, HtmlTooltip } from './style'

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  const base64string = window.btoa(binary)
  return base64string;
}

export default function Diarypage(props) {
  const classes = useStyles();
  return (
    <div classes={classes.rootGrid}>
      <Container className={classes.cardGrid}>
        <div className={classes.rootList}>
          <Grid container spacing={4} className={classes.flexGrid}>
            {props.meals
              .map(meal => (
                <Grid item key={meal.imageName} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <HtmlTooltip
                        className={classes.tooltip}
                        title={
                          <React.Fragment>
                            <Typography >{meal.recipeName}:</Typography>
                            <Typography color="inherit">Ingredients:</Typography>
                            <List>
                              {meal.ingredients.map(ingredient => (
                                <ListItem>
                                  <ListItemText
                                    primary={<Typography>{ingredient.name}</Typography>}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </React.Fragment>
                        }
                      >
                        <img src={`data:image/jpeg;base64,${arrayBufferToBase64(meal.image.data)}`} />
                      </HtmlTooltip>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}