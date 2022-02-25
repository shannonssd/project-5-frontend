import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card, CardContent, CardMedia, Typography, Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemDetailCard from '../organisms/ItemDetailCard';
import BackIcon from "../molecules/BackIcon";

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
    <div className="mobile">
      <BackIcon onClick={goBack} />
      <ItemDetailCard chosenItem={chosenItem} />
    </div>
  );
}
