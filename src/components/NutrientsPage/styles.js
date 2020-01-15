import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '60vw',
    position: 'relative',
    overflow: 'auto',
    maxHeight: '40vh',
    margin: '0 auto'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '6vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
  },
}));