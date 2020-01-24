import { makeStyles, withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { Tooltip } from '@material-ui/core';

export const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export const makeListStyle = percent => ({
  background: `linear-gradient(to left, #a8e063, #1d170c)`,
  backgroundSize: `${percent}% 20%`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom"
})

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
  justifyContent: 'center',
  backgroundColor: 'white',
  color: teal[500]
}