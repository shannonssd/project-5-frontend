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
import {
  Button,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for BackIcon
 *
 * ========================================================
 * ========================================================
 */
function BackIcon({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>
        <ArrowCircleLeftIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default BackIcon;
