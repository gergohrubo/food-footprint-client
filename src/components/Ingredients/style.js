import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: '5vw',
    marginTop: '5vw',
    width: '40vw',
    height: '40vw',
    borderRadius: 2,
    backgroundColor: '#e9ffe3',
    color: '#c7fff4',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    alignItems: 'center',
    display: 'table',
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%'
  }
}))