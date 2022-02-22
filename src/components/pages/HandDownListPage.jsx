import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Grid, Box, Button, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemCard from '../sub-components/ItemCard';
import { useAuthContext } from "../others/store";

export default function HandDownListPage({ setChosenItem }) {
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // authContext contains object with userId, name, displayAddress, district, token
  const { state } = useAuthContext();
  const { name, userId, district } = state;
  console.log('<== auth context name ==>', name);

  useEffect(() => {
    async function loadItemList() {
      const query = new URLSearchParams();
      query.append('userId', userId);
      query.append('district', district);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-all-items?${query.toString()}`);

      const { itemsArr } = res.data;
      console.log('<== res.data all ==>', res.data);
      console.log('<== res.data items array ajax ==>', itemsArr);

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

  const addItem = () => {
    history.push('/hmd-add');
  };

  const goBack = () => {
    history.push('/home');
  };

  return (
    <Box sx={{ width: '320px', mx: 'auto', my: '20px' }}>
      <Typography variant="h1">
        Hand Me Downs in
        {' '}
        {district}
      </Typography>
      <Typography variant="h1">
        Hi
        {' '}
        {name}
      </Typography>
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
