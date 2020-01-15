import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rootList: {
    width: '40vw',
    maxWidth: '40vw',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '40vh',
    margin: '0 5vw'
  },
  rootGrid: {
    width: '40vw',
    maxWidth: '40vw',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '40vh',
    margin: '0 5vw'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
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
}));

export const flexDiv = {
  display: 'flex',
  //justifyContent: 'center'
}

export const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: '6vh',
  paddingLeft: '15vw',
  paddingRight: '15vw'
}