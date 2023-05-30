import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      //main: '#'+Math.floor(Math.random()*16777215).toString(16),
    },
    secondary: {
      main: '#f50057',
      //main: '#'+Math.floor(Math.random()*16777215).toString(16),
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,
  },
});

export default theme;
