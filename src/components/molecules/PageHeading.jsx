import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function PageHeading({ handleBackClick, header }) {
  return (
    <Stack
      direction="row"
      justifyContent="start"
      alignItems="center"
    >
      <Button onClick={handleBackClick}>
        <ArrowCircleLeftIcon fontSize="large" />
      </Button>
      <Typography variant="h1">
        {header}
      </Typography>
    </Stack>
  );
}

export default PageHeading;
