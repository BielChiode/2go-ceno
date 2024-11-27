import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#947433',
      dark: '#27261B',
      light: '#C1B168',
    },
    secondary: {
      main: '#54C7D1',
      dark: '#168793',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
});

export default theme;
