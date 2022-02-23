import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card, CardContent, CardMedia, Typography, Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemDetailCard from '../sub-components/ItemDetailCard';

export default function HandDownDetailPage({ chosenItem }) {
  console.log('chosenItem', chosenItem);
  const history = useHistory();
  const goBack = () => {
    history.push('/hmd-list');
  };

  const goChatRoom = (sellerId) => {
    history.push('/chat-room', { params: sellerId });
  };

  return (
    <div>
      <Button onClick={goBack}>
        <ArrowBackIosIcon />
      </Button>
      <ItemDetailCard chosenItem={chosenItem} />
      <button type="button" onClick={() => goChatRoom(chosenItem.sellerId)}>
        Im interested
      </button>
    </div>
  );
}
