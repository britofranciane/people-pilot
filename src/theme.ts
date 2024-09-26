import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212429',
      paper: '#1c1c21',
    },
    text: {
      primary: '#d6d6de',
      secondary: '#fafafa',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    divider: '#4f5461',
  },
  typography: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
