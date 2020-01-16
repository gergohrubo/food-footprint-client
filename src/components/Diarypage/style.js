import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

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
  flexGrid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    //paddingTop: theme.spacing(8),
    //paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '20vw',
      height: '20vw',
      maxHeight: '20vw',
      maxWidth: '20vw'
    },
  },
  cardMedia: {
    objectFit: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  tooltip: {
    display: 'flex',
    position: "relative",
    width: '100%',
    height: '100%',
    maxHeight: "100%",
    maxWidth: "100%",
  },
  cardContent: {
    flexGrow: 1,
    borderRadius: '50%'
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
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

export const textField = {
  marginLeft: '8px',
  marginRight: '8px',
  display: 'flex',
  //width: '15vh',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: teal[500]
}