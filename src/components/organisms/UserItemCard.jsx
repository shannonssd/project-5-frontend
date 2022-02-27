/* eslint-disable no-underscore-dangle */

/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line object-curly-newline
import { Card, CardContent, CardMedia, Typography, Stack, IconButton } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useAuthContext } from "../others/store";

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function UserItemCard({
  item, setChosenItem,
}) {
  console.log('<== item ==>', item);
  const history = useHistory();
  const { state } = useAuthContext();
  const { userId } = state;
  console.log('<== auth context ==>', useAuthContext());

  // Event handler when user clicks on item card
  // const handleClick = async () => {
  //   setChosenItem(item);
  //   history.push('/hmd-user-detail');
  // };

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = { userId, itemId: item._id };
    console.log('<== data ==>', data);
    const res = axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/remove-item`, { data });
    history.go(0);
  };

  return (
    <Card
      sx={{
        width: "150px", my: "10px", mr: "16px", borderRadius: '20px',
      }}

    >
      <CardContent>

        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <CardMedia component="img" image={item.photo} alt={item.itemName} height="100" />
          <Typography variant="h2" color="primary.main">
            {item.itemName}
          </Typography>
          <IconButton onClick={handleDelete}><DeleteRoundedIcon /></IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
