/*
 * ========================================================
 *                       Imports
 * ========================================================
 */
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Item() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("<== is expanded ==>", expanded);

  const items = [
    {
      name: "superga shoes",
      description:
        "beige superga shoes, slightly scuffed on heels, washed, size 37",
      condition: "gently used",
      photoLink: "/images/shoes.png",
      peopleInterested: [1, 3, 83],
    },
    {
      name: "superga shoes",
      description:
        "beige superga shoes, slightly scuffed on heels, washed, size 37",
      condition: "gently used",
      photoLink: "/images/shoes.png",
      peopleInterested: [1, 3, 83],
    },
    {
      name: "superga shoes",
      description:
        "beige superga shoes, slightly scuffed on heels, washed, size 37",
      condition: "gently used",
      photoLink: "/images/shoes.png",
      peopleInterested: [1, 3, 83],
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <Card sx={{ width: "230px", padding: "20px" }}>
          <Typography variant="h2">{item.name}</Typography>
          <CardMedia
            component="img"
            height="194"
            image={item.photoLink}
            alt="Superga shoes"
          />
          <IconButton
            sx={{
              transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
              // marginLeft: 'auto',
            }}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="h3">Description</Typography>
              <Typography variant="body1" className="capitalise-first">
                {item.description}
              </Typography>
              <Typography variant="h3">Condition</Typography>
              <Typography variant="body1" className="capitalise-first">
                {item.condition}
              </Typography>
              <Typography variant="h3">
                {item.peopleInterested.length} people are interested
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
