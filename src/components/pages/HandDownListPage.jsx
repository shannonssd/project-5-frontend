/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Grid, Typography, Stack,
} from '@mui/material';
import ItemCard from '../organisms/ItemCard';
import { useAuthContext } from "../others/store";
import BackIcon from "../molecules/BackIcon";
import AddIcon from '../molecules/AddIcon';
import NavMenu from "../organisms/NavMenu";
import BottomBar from "../molecules/BottomBar";

export default function HandDownListPage({ setChosenItem }) {
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // authContext contains object with dispatch and state
  // state is an object with userId, name, displayAddress, district, token
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

  const addItem = () => {
    history.push('/hmd-add');
  };
  const goBack = () => {
    history.push('/home');
  };

  return (
    <div className="mobile">
      <Stack
        direction="row-reverse"
        justifyContent="start"
        alignItems="center"
      >
        <Typography variant="h1">
          Hand Me Downs
        </Typography>
        <BackIcon onClick={goBack} />
      </Stack>

      {!loading
       && (
       <Grid
         container
         spacing={2}
         sx={{
           height: "470px", overflow: "scroll", mt: "10px", p: "3px",
         }}
       >
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

      <BottomBar>
        <NavMenu />
        <AddIcon onClick={addItem} />
      </BottomBar>
    </div>
  );
}
