/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import { Typography } from '@mui/material';
import React from 'react';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for Header
 *
 * ========================================================
 * ========================================================
 */
function Header(props) {
  return (
    <div>
      <Typography variant="h1">
        {weather}
      </Typography>

    </div>
  );
}

export default Header;
