import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#1F18C0',
      },
      secondary: {
        main: '#456e3f',
      },
      error: {
        main: '#f45636',
      },
      dusty: {
        main: "#BE9FB0",
        dark: "#581845",
      },
    },
    typography: {
      h1: {
        fontSize: 24,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        fontWeight: 500,
      },
      h2: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        fontWeight: 500,
      },
      h3: {
        fontSize: 14,
        lineHeight: 1.75,
        fontWeight: 600,
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
      },
      body2: {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 400,
      },
      button: {
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        lineHeight: 1.75,
        fontWeight: 500,
      },
      h4: {
        fontSize: 44,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        lineHeight: 1,
        fontWeight: 500,
        textAlign: 'end',
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
