import React from 'react';
import { Box } from '@mui/material';

function TexteeBubble({ text }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
      <Box
        component="div"
        sx={{
          display: 'inline',
          borderRadius: 3,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'dusty.main'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : '#fff'),
          p: 1,
          fontSize: '0.875rem',
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        }}
      >
        {text}
      </Box>
    </div>
  );
}

export default TexteeBubble;
