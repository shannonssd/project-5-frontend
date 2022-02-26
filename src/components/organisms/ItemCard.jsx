/* eslint-disable no-underscore-dangle */

/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line object-curly-newline
import { Card, CardContent, CardMedia, Typography, Avatar, Stack } from "@mui/material";
import axios from "axios";

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function ItemCard({
  item, setChosenItem,
}) {
  const history = useHistory();
  console.log('<== item ==>', item);

  // Event handler when user clicks on item card
  const handleClick = async () => {
    // const query = new URLSearchParams();
    // // item is the current targeted element in itemList from HandDownListPage.jsx
    // query.append('itemId', item._id);
    // const res = await axios.get
    // (`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-item?${query.toString()}`);
    // Sets chosenItem as the clicked item
    setChosenItem(item);
    history.push('/hmd-detail');
  };

  // console.log('<== chosen item ==>', chosenItem);

  return (
    <Card sx={{ width: "130px", mx: "auto", borderRadius: '20px' }} onClick={handleClick}>
      <CardContent>

        <Stack
          direction="column"
          alignItems="start"
          spacing={2}
        >
          <CardMedia component="img" image={item.photo} alt={item.itemName} height="100" />
          <Typography variant="h2" color="primary.main">
            {item.itemName}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Avatar src={item.sellerPhoto} alt={item.sellerName} sx={{ width: 24, height: 24 }} />
            {' '}
            <Typography variant="body2">{item.sellerName}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
