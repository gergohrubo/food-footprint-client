import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import background from './background.jpg'

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
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
        marginBottom: '15px',
        '& label.Mui-focused': {
          color: teal[500],
        },
      },
    },
    MuiTypography: {
      root: {
        color: teal[500],
      }
    },
    MuiIconButton: {
      root: {
        color: teal[500],
      }
    },
    MuiChip: {
      root: {
        color: 'white',
        backgroundColor: teal[500]
      }
    }
  },
});

export const modalClass = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const modalStyle = {
  backgroundColor: '#e0e0e0',
  border: '2px solid #000',
  textAlign: 'center',
  boxShadow: '2px',
  padding: '24px 64px 48px',
}

export const appStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  paddingTop: '5vh',
  height: '100vh'
}

// export const uploadPageStyle = {
//   display: 'flex'
// }

// export const uploadpageBackground = {
//   height: '100vh',
//   width: '100vw'
// }

// export const uploadpageContainer = {
//   height: '80vh',
//   width: '80vw',
//   position: 'absolute',
//   bottom: '5vh',
//   left: '10vw',
//   backgroundColor: teal[700]
// }

// text: {
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//       border: 0,
//         color: 'white',
//           height: 48,
//             padding: '0 30px',
//               boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// },