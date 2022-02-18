/*
 * ========================================================
 *                       Imports
 * ========================================================
 */

import React from 'react';
import {
  Card, CardContent, CardMedia, IconButton, Collapse, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*
 * ========================================================
 *                       Component
 * ========================================================
 */
export default function FullItemCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
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

    </div>

  );
}
