import React from 'react';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function LikeButton({ onClick, liked }) {
  return (
    <StyledRating
      name="like-button"
      onClick={onClick}
      value={liked}
      max={1}
      getLabelText={(value) => `${value === 0 ? 'not liked' : 'liked'}`}
      precision={1}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  );
}
