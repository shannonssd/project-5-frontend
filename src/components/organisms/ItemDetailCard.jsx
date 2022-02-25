/* eslint-disable max-len */
/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React from 'react';
import { useHistory } from "react-router-dom";

import {
  Card, CardContent, CardMedia, Typography, Stack, Avatar, Button, CardActions,
} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function ItemDetailCard({ chosenItem }) {
  const history = useHistory();

  const goChatRoom = (sellerId) => {
    history.push('/chat-room', { params: sellerId });
  };
  return (
    <div>
      <Card sx={{ width: '230px', padding: '20px', mx: "auto" }}>
        <CardMedia
          component="img"
          height="194"
          image={chosenItem.photo}
          alt={chosenItem.itemName}
        />
        <CardContent>
          <Typography variant="h2" color="primary.main">
            {chosenItem.itemName}
          </Typography>
          <Typography variant="h3" color="primary.main">
            Description
          </Typography>
          <Typography variant="body1" className="capitalise-first" color="primary.main">
            {chosenItem.description}
          </Typography>
          <Typography variant="h3" color="primary.main">
            Condition
          </Typography>
          <Typography variant="body1" className="capitalise-first" color="primary.main">
            {chosenItem.condition}
          </Typography>
          <Typography variant="h3" color="primary.main">
            Seller
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Avatar src={chosenItem.sellerPhoto} alt={chosenItem.sellerName} sx={{ width: 24, height: 24 }} />
            {' '}
            <Typography variant="body2">{chosenItem.sellerName}</Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" startIcon={<ChatBubbleIcon />} onClick={() => goChatRoom(chosenItem.sellerId)} sx={{ mx: 'auto' }}>Contact Seller</Button>
        </CardActions>
      </Card>
    </div>

  );
}
