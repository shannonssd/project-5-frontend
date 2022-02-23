import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#1d2770',
      },
      secondary: {
        main: '#456e3f',
      },
      error: {
        main: '#f45636',
      },
    },
    typography: {
      h1: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        fontWeight: 500,
        textAlign: 'center',
      },
      h2: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        fontWeight: 500,
        textAlign: 'center',
      },
      h3: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        lineHeight: 1.75,
        fontWeight: 500,
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 600,
        lg: 900,
        xl: 1536,
      },
    },
  },
);

export default mainTheme;
