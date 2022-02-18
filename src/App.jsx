import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './theme';
import ItemsPage from './components/hand-me-down/Page';

export default function App() {
  const [items, setItems] = useState([{
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  ]);

  return (

    <ThemeProvider theme={mainTheme}>
      <div>
        <ItemsPage items={items} />
      </div>
    </ThemeProvider>

  );
}
