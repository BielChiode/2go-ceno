import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      sectionBackground: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      sectionBackground?: string;
    };
  }
}

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
    background: {
      default: '#F4F4F4',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  custom: {
    sectionBackground: '#EEEEEE',
  },
});

export default theme;
