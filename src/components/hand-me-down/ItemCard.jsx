/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function ItemCard({ item }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('goes big card component');
  };
  return (
    <Card sx={{ width: '130px', mx: 'auto' }} onClick={handleClick}>
      <CardContent>
        <Typography variant="h2" color="primary.main">
          {item.name}
        </Typography>
        <CardMedia
          component="img"
          image={item.photoLink}
          alt="Superga shoes"
        />
        <Typography variant="subtitle2" color="primary.main">
          {item.peopleInterested.length}
          {' '}
          people are interested
        </Typography>
      </CardContent>
    </Card>
  );
}
