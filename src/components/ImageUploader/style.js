import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: '5vw',
    width: '90vw',
    height: '80vh',
    borderRadius: 8,
    background: 'rgba(224,242,241, .5)',
    color: '#bdbdbd',
    maxHeight: '80vh',
    transition: 'border .24s ease-in-out',
    alignItems: 'center',
    display: 'table'
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '100%',
    height: '100%',
    maxHeight: "80vh",
    maxWidth: "90vw",
  },
  extraDiv: {
    display: 'flex',
    position: "relative",
    width: '100%',
    height: '100%',
    maxHeight: "80vh",
    maxWidth: "90vw",
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  }
}))