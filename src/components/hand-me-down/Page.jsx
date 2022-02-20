/*
 * ========================================================
 *                       Imports
 * ========================================================
 */
import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FullItemCard from './FullItemCard';
import ItemCard from './ItemCard';
import Form from './Form';

/*
 * ========================================================
 *                       Component
 * ========================================================
 */

export default function ItemsPage() {
  const [route, setRoute] = useState('/main');
  const [items, setItems] = useState([{
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'nike shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'adidas shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  ]);

  const [chosenItem, setChosenItem] = useState(null);

  // Event handler when user clicks add
  const handleAddButton = (e) => {
    e.preventDefault();
    setRoute('/add');
  };
  console.log('<== ItemsPage ==>', items);

  return (
    <Box sx={{ width: '320px', mx: 'auto', my: '20px' }}>
      {route === '/main' && (
      <>
        <Button onClick={handleAddButton}>
          <AddCircleIcon />
        </Button>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={6}>
              <ItemCard
                item={item}
                setChosenItem={setChosenItem}
                setRoute={setRoute}
              />
            </Grid>
          ))}
        </Grid>
      </>
      )}

      {route === '/item' && (
      <FullItemCard chosenItem={chosenItem} setRoute={setRoute} />
      )}

      {route === '/add' && (
        <Form />
      )}
    </Box>
  );
}
