import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import {
  Stack, Typography, Card, CardMedia, IconButton,
} from '@mui/material';

import mainTheme from '../../theme';

export default function IgCard({
  image, header, handleButton, buttonIcon, handleView,
}) {
  const history = useHistory();
  return (
    <Card
      sx={{
        width: "150px", height: "200px", my: "10px", mr: "16px", borderRadius: "20px",
      }}
      onClick={handleView}
    >

      <CardMedia component="img" image={image} alt={image.toString()} height="130" />

      <Stack
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={1}
      >

        <Typography variant="h2" sx={{ textAlign: "center" }}>{header}</Typography>
        <IconButton onClick={handleButton}>{buttonIcon}</IconButton>
      </Stack>

    </Card>
  );
}
