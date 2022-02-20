import React, { useState } from "react";
import {
  Card, CardContent, CardMedia, Typography, Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ItemDetailCard from "../hand-me-down/ItemDetailCard";

export default function HandDownDetailView({ setView, chosenItem, setHandDownView }) {
  const goBack = () => {
    setHandDownView("handdownlist");
  };

  const goChatRoom = () => {
    setView("chat");
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
