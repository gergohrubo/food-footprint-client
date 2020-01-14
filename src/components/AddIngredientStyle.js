import { makeStyles, withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { Button, TextField } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    textAlign: 'center',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    display: 'block',
    marginBottom: theme.spacing(2)
  }
}))

export const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))(Button);

export const ColorTextField = withStyles(theme => ({
  root: {
    borderColor: theme.palette.getContrastText(teal[500]),
  },
}))(TextField);