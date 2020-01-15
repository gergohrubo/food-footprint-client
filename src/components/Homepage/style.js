import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '20vh'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '12vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
  }
}))