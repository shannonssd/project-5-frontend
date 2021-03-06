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
import {
  Card, CardContent, CardMedia, Typography, Avatar, Stack,
} from "@mui/material";

/*
 * ========================================================
 * ========================================================
 *
 *                Component for ItemCard
 *
 * ========================================================
 * ========================================================
 */
export default function ItemCard({
  item, setChosenItem,
}) {
  const history = useHistory();

  // Event handler when user clicks on item card
  const handleClick = async () => {
    setChosenItem(item);
    history.push('/hmd-detail');
  };

  return (
    <Card sx={{ width: "150px", mx: "auto", borderRadius: '20px' }} onClick={handleClick}>
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
