/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React, { useState } from "react";
// eslint-disable-next-line object-curly-newline
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function ItemCard({ item, setChosenItem, setRoute }) {
  // Event handler when user clicks on item card
  const handleClick = (e) => {
    e.preventDefault();
    // Sets chosenItem as the clicked item
    setChosenItem(item);
    setRoute("/item");
  };

  return (
    <Card sx={{ width: "130px", mx: "auto" }} onClick={handleClick}>
      <CardContent>
        <Typography variant="h2" color="primary.main">
          {item.name}
        </Typography>
        <CardMedia component="img" image={item.photoLink} alt="Superga shoes" />
        <Typography variant="subtitle2" color="primary.main">
          {item.peopleInterested.length}
          people are interested
        </Typography>
      </CardContent>
    </Card>
  );
}
