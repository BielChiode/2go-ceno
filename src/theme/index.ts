import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      sectionBackground: string;
      sectionBackgroundSecondary: string;
      gold: string;
      goldLight: string;
      surface: string;
      surfaceAlt: string;
      textMuted: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      sectionBackground?: string;
      sectionBackgroundSecondary?: string;
      gold?: string;
      goldLight?: string;
      surface?: string;
      surfaceAlt?: string;
      textMuted?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C1A55C',
      dark: '#27261B',
      light: '#D4C07A',
    },
    secondary: {
      main: '#54C7D1',
      dark: '#168793',
    },
    background: {
      default: '#0D0D0B',
      paper: '#1A1917',
    },
    text: {
      primary: '#E8E4DC',
      secondary: '#9A9590',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '5rem',
      fontWeight: 300,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '3.5rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 0,
  },
  custom: {
    sectionBackground: '#1A1917',
    sectionBackgroundSecondary: '#0D0D0B',
    gold: '#C1A55C',
    goldLight: '#D4C07A',
    surface: '#1A1917',
    surfaceAlt: '#141412',
    textMuted: '#9A9590',
  },
});

export default theme;
