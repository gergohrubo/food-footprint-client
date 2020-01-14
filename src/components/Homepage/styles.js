import { makeStyles, withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { Button, TextField } from '@material-ui/core'

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