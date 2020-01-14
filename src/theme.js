import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        backgroundColor: teal[500],
        '&:hover': {
          backgroundColor: teal[700],
        },
      },
    },
    MuiTextField: {
      root: {
        display: 'block',
        marginBottom: '15px'
      },
    },
    MuiTypography: {
      root: {
        color: teal[500]
      }
    },
  },
});

export const modalClass = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const modalStyle = {
  backgroundColor: '#757575',
  border: '2px solid #000',
  textAlign: 'center',
  boxShadow: '2px',
  padding: '24px 64px 48px',
}

// text: {
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//       border: 0,
//         color: 'white',
//           height: 48,
//             padding: '0 30px',
//               boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// },