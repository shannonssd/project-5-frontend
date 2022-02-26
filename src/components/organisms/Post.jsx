/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
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
import axios from 'axios';
import {
  Avatar, Divider, Grid, Stack, Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useAuthContext } from "../others/store";
import LikeButton from '../molecules/LikeButton';

/*
 * ========================================================
 * ========================================================
 *
 *          Component for all rendering posts
 *
 * ========================================================
 * ========================================================
 */
const Row = styled('div')({
  backgroundColor: '#ffffff91',
  padding: 10,
  marginLeft: -20,
  marginRight: -20,
  marginBottom: 1,

});

export default function Post({ post, isFollowed }) {
  const { state } = useAuthContext();
  const { userId } = state;
  console.log('CONTEXT INSIDE OF POST ', userId);

  const likePost = async (id) => {
    const data = {
      userId,
      postId: id,
    };
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/like-post`, data).then((response) => {
      console.log('Post liked');
    });
  };
  let likes = 0;
  if (post.likedBy !== undefined) {
    likes = post.likedBy.length;
  }

  return (
    <div>
      <Grid
        container
        id="avatar-userdetails-text-likes"
      >
        <Grid item xs={2}>
          <Avatar src={post.posteePhoto} alt={post.posteePhoto.toString()} sx={{ width: 40, height: 40 }} />
        </Grid>
        <Grid item xs={8}>
          <Stack
            id="userdetails-text"
            direction="column"
            spacing={1}
            justifyContent="flex-start"
          >
            <Stack
              id="userdetails"
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Typography variant="h2">{post.postedBy}</Typography>
              <Typography variant="caption">{post.displayAddress}</Typography>
            </Stack>
            <Typography variant="body1">{post.post}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          { isFollowed ? (
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
            >
              <LikeButton onClick={() => { likePost(post._id); }} />

              <Typography variant="body1">{likes}</Typography>

            </Stack>
          ) : <div />}
        </Grid>
      </Grid>

    </div>
  );
}
