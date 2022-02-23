/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Grid, Box, Button, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemCard from '../sub-components/ItemCard';

export default function HandDownListPage({ setChosenItem }) {
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function loadItemList() {
      const query = new URLSearchParams();
      query.append('userId', '6210d8e48c88c11c66e08ecc');
      query.append('district', 'Bedok');

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-all-items?${query.toString()}`);

      const { itemsArr } = res.data;
      console.log('<== res.data items array ajax ==>', itemsArr);

      let items = [];
      for (let i = 0; i < itemsArr.length; i += 1) {
        const sellerId = itemsArr[i]._id;
        const sellerName = itemsArr[i].userDetails.name;
        const sellerPhoto = itemsArr[i].userDetails.photo;
        const sellerAddress = itemsArr[i].addressDetails.displayAddress;
        for (let j = 0; j < itemsArr[i].handMeDowns.length; j += 1) {
          itemsArr[i].handMeDowns[j].sellerId = sellerId;
          itemsArr[i].handMeDowns[j].sellerName = sellerName;
          itemsArr[i].handMeDowns[j].sellerPhoto = sellerPhoto;
          itemsArr[i].handMeDowns[j].sellerAddress = sellerAddress;
        }
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
    history.push('/hmd-add');
  };

  const goBack = () => {
    history.push('/home');
  };

  return (
    <Box sx={{ width: '320px', mx: 'auto', my: '20px' }}>
      <Typography variant="h1">Hand Me Downs</Typography>
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
