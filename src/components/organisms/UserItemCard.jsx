/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line object-curly-newline

/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Card, CardContent, CardMedia, Typography, Stack, IconButton,
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useAuthContext } from "../others/store";

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function UserItemCard({
  item,
}) {
  const history = useHistory();
  const { state } = useAuthContext();
  const { userId } = state;

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = { userId, itemId: item._id };
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/remove-item`, { data });
    history.go(0);
  };

  return (
    <Card
      sx={{
        width: "150px", mx: "auto", borderRadius: '20px',
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
