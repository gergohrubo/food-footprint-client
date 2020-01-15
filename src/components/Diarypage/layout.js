import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import CreateEventContainer from './CreateEventContainer'
import moment from 'moment'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonGroup: {
    marginBottom: theme.spacing(2)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

export default function Diarypage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {props.events && props.events
            .filter(event => props.onlyFutureEvents ? moment().isBefore(event.startDate) : true)
            .map(event => (
              <Grid item key={event.id} xs={12} sm={6} md={4}>
                <Link to={`/event/${event.id}`}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={event.imgURL}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {event.name}
                      </Typography>
                      <Typography>
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
        <CreateEventContainer isUpdate={false} />
      </Container>
    </React.Fragment >
  );
}