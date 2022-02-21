/* eslint-disable no-underscore-dangle */

/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line object-curly-newline
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
  // Event handler when user clicks on item card
  const handleClick = async () => {
    const query = new URLSearchParams();
    // item is the current targeted element in itemList from HandDownListPage.jsx
    query.append('itemId', item._id);
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-item?${query.toString()}`);
    // Sets chosenItem as the clicked item
    setChosenItem(item);
    console.log('<== item id ==>', item._id);
    history.push('/hmd-detail');
  };

  return (
    <Card sx={{ width: "130px", mx: "auto" }} onClick={handleClick}>
      <CardContent>
        <Typography variant="h2" color="primary.main">
          {item.itemName}
        </Typography>
        <CardMedia component="img" image={item.photo} alt={item.itemName} />
      </CardContent>
    </Card>
  );
}
