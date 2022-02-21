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
export default function ItemDetailCard({ chosenItem }) {
  return (
    <div>
      <Card sx={{ width: '230px', padding: '20px' }}>
        <Typography variant="h2" color="primary.main">
          {chosenItem.name}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={chosenItem.photoLink}
          alt={chosenItem.name}
        />
        <CardContent>
          <Typography variant="h3" color="primary.main">
            Description
          </Typography>
          <Typography variant="body1" className="capitalise-first" color="primary.main">
            {chosenItem.description}
          </Typography>
          <Typography variant="h3" color="primary.main">
            Condition
          </Typography>
          <Typography variant="body1" className="capitalise-first" color="primary.main">
            {chosenItem.condition}
          </Typography>
          <Typography variant="h3" color="primary.main">
            {chosenItem.peopleInterested.length}
            {' '}
            people are interested
          </Typography>
        </CardContent>

      </Card>

    </div>

  );
}
