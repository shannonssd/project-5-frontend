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
import AddCircleIcon from '@mui/icons-material/AddCircle';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for AddIcon
 *
 * ========================================================
 * ========================================================
 */
function AddIcon({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>
        <AddCircleIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default AddIcon;
