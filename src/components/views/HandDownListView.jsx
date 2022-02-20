import React, { useState } from "react";
import {
  Grid, Box, Button, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemCard from '../hand-me-down/ItemCard';

export default function HandDownListView({ setHandDownView, setView, setChosenItem }) {
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

  const addItem = () => {
    setHandDownView("handdownadd");
  };

  const goBack = () => {
    setView("home");
  };

  return (
    <Box sx={{ width: '320px', mx: 'auto', my: '20px' }}>
      <Typography variant="h1">HandDownListView</Typography>
      <Button onClick={addItem}>
        <AddCircleIcon />
      </Button>
      <Button onClick={goBack}>
        <ArrowBackIosIcon />
      </Button>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6}>
            <ItemCard
              setHandDownView={setHandDownView}
              item={item}
              setChosenItem={setChosenItem}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
