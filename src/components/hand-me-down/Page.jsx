/*
 * ========================================================
 *                       Imports
 * ========================================================
 */
import React from 'react';
import { Grid } from '@mui/material';
import FullItemCard from './FullItemCard';
import ItemCard from './ItemCard';
/*
 * ========================================================
 *                       Component
 * ========================================================
 */

export default function ItemsPage({ items }) {
  console.log('<== ItemsPage ==>', items);
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={6}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>

  );
}
