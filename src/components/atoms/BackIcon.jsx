import React from 'react';
import {
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function BackIcon({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>
        <ArrowBackIosIcon />
        {' '}
        Back
      </Button>
    </div>
  );
}

export default BackIcon;
