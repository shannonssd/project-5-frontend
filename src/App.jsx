import './App.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './theme';
import Item from './components/hand-me-down/ItemCard';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <Item />
      </div>
    </ThemeProvider>
  );
}
