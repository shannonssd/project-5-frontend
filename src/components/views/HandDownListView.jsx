import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid, Box, Button, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemCard from '../hand-me-down/ItemCard';

export default function HandDownListView({ setHandDownView, setView, setChosenItem }) {
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItemList() {
      const data = new URLSearchParams();
      data.append('userId', '6210d8e48c88c11c66e08ecc');
      data.append('district', 'Bedok');

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-all-items?${data.toString()}`);

      const { itemsArr } = res.data;
      console.log('<== res.data all items ajax ==>', itemsArr);

      let items = [];
      for (let i = 0; i < itemsArr.length; i += 1) {
        const temp = itemsArr[i].handMeDowns;
        console.log('<== temp array ==>', temp);
        items = items.concat(temp);
      }
      setItemList(items);
      setLoading(false);
      console.log('<== items ==>', items);
    }

    loadItemList();
  }, []);

  console.log('<== itemList ==>', itemList);

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
      {!loading
       && (
       <Grid container spacing={2}>
         {itemList.map((item) => (
           <Grid item xs={6}>
             <ItemCard
               setHandDownView={setHandDownView}
               item={item}
               setChosenItem={setChosenItem}
             />
           </Grid>
         ))}
       </Grid>
       )}

    </Box>
  );
}