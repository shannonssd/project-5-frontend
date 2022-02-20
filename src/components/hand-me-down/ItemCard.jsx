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
export default function ItemCard({
  item, setChosenItem, handDownView, setHandDownView,
}) {
  // Event handler when user clicks on item card
  const handleClick = () => {
    // Sets chosenItem as the clicked item
    console.log(handDownView);
    setChosenItem(item);
    setHandDownView("handdowndetail");
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
