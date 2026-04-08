import { createTheme } from '@mui/material/styles';
import { grey, blueGrey, deepPurple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#508D4E',
    },
    secondary: {
      main: '#508D4E',
    },
    background: {
      default: grey[50],
      paper: grey[100],
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[700],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 15,
  
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          backgroundColor: '#B5C18E',
          borderRadius: '14px',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#76885B',
          },
          '&.Mui-selected': {
            backgroundColor: '#d0d0d0',
            '&:hover': {
              backgroundColor: '#76885B',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: '8px 0',
          padding: '0 8px',
          borderRadius: '8px',
          backgroundColor: '#76885B',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0',
          '& .MuiInputBase-root': {
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
          },
          '& .MuiInputBase-input': {
            padding: '12px',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: '4px',
          marginBottom: '4px',
          padding: '6px',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          padding: '6px',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
        },
        select: {
          padding: '8px 12px',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 16px',
          boxShadow: 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: '#365E32',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});
