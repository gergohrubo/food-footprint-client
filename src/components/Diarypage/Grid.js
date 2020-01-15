import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { Card, Container, Typography, Grid, CardContent, CssBaseline } from '@material-ui/core';
import { useStyles } from './style'

// <CardMedia
//                     className={classes.cardMedia}
//                     image={event.imgURL}
//                     title="Image title"
//                   />

// <Typography>
//                       {mea,.ingredients}
//                     </Typography>

//      

export default function Diarypage(props) {
  const classes = useStyles();

  return (
    <div classes={classes.rootGrid}>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {props.meals
            .map(meal => (
              <Grid item key={meal.imageName} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      {meal.recipeName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}