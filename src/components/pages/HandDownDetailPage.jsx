import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card, CardContent, CardMedia, Typography, Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemDetailCard from '../sub-components/ItemDetailCard';

export default function HandDownDetailPage({ chosenItem }) {
  const history = useHistory();
  const goBack = () => {
    history.push('/hmd-list');
  };

  const goChatRoom = () => {
    history.push('/chat-room');
  };

  return (
    <div>
      <Button onClick={goBack}>
        <ArrowBackIosIcon />
      </Button>
      <ItemDetailCard chosenItem={chosenItem} />
      <button type="button" onClick={goChatRoom}>
        Im interested
      </button>
    </div>
  );
}
