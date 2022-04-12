/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Stack, Typography, Card, CardMedia, IconButton,
} from '@mui/material';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for IgCard
 *
 * ========================================================
 * ========================================================
 */
export default function IgCard({
  image, header, handleButton, buttonIcon, handleView,
}) {
  const history = useHistory();
  return (
    <Card
      sx={{
        width: "150px", height: "200px", my: "10px", mr: "16px", borderRadius: "20px",
      }}

    >

      <CardMedia onClick={handleView} component="img" image={image} alt={image.toString()} height="100" />

      <Stack
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={0.5}
      >
        <IconButton onClick={handleButton}>{buttonIcon}</IconButton>
        <Typography variant="h2" sx={{ textAlign: "center" }}>{header}</Typography>
      </Stack>
    </Card>
  );
}
