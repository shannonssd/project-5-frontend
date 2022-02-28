/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Typography, Stack, IconButton, Box,
} from '@mui/material';
import { Masonry } from '@mui/lab/';
import FolderIcon from '@mui/icons-material/Folder';
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
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
        <BackIcon onClick={goBack} />
        <Typography variant="h1">
          Hand Me Downs
        </Typography>

      </Stack>

      {!loading
       && (
         <Box sx={{
           height: "540px",
           overflow: "auto",
         }}
         >
           <Masonry
             columns={2}
             spacing={2}
             sx={{ mx: 'auto' }}
           >
             {itemList.map((item) => (
               <ItemCard
                 item={item}
                 setChosenItem={setChosenItem}
               />

             ))}
           </Masonry>
         </Box>
       )}

      <BottomBar>
        <NavMenu />
        <IconButton onClick={() => history.push('/hmd-user')}><FolderIcon /></IconButton>
        <AddIcon onClick={addItem} />

      </BottomBar>
    </div>
  );
}
