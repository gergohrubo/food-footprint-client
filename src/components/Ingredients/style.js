import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: '15vw',
    paddingTop: '15vh',
    width: '70vw',
    height: '20vh',
    backgroundColor: 'none',
    outline: 'none',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '100%'
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%'
  }
}))