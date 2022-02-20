/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React from 'react';

import {
  Card, CardContent, CardMedia, IconButton, Collapse, Typography, Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function Item() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('<== is expanded ==>', expanded);

  const items = [{
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  {
    name: 'superga shoes',
    description: 'beige superga shoes, slightly scuffed on heels, washed, size 37',
    condition: 'gently used',
    photoLink: '/images/shoes.png',
    peopleInterested: [1, 3, 83],
  },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6}>
            <Card sx={{ width: '230px', padding: '20px' }}>
              <Typography variant="h2" color="primary.main">
                {item.name}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={item.photoLink}
                alt="Superga shoes"
              />
              <IconButton
                sx={{
                  transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                }}
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="h3" color="primary.main">
                    Description
                  </Typography>
                  <Typography variant="body1" className="capitalise-first" color="primary.main">
                    {item.description}
                  </Typography>
                  <Typography variant="h3" color="primary.main">
                    Condition
                  </Typography>
                  <Typography variant="body1" className="capitalise-first" color="primary.main">
                    {item.condition}
                  </Typography>
                  <Typography variant="h3" color="primary.main">
                    {item.peopleInterested.length}
                    {' '}
                    people are interested
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  );
}
