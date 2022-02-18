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
      h2: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 500,
        textAlign: 'center',
      },
      h3: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.02857em',
        fontWeight: 500,
      },
      body1: {
        fontWeight: 400,
      },
    },
  },
);

export default mainTheme;
