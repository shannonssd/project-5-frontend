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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar, Divider, Grid, IconButton, Stack, Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

export default function Post({ post, isFollowed }) {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const { state } = useAuthContext();
  const { userId } = state;
  const history = useHistory();

  useEffect(() => {
    if (post.likedBy !== undefined) {
      setLikes(post.likedBy.length);
      console.log("<== no. of likes ==>", likes); }
    setLoading(false);
  }, []);
  console.log('<== outside useEffect liked by ==>', post.likedBy);

  const likePost = async (id) => {
    setLoading(true);
    const data = {
      userId,
      postId: id,
    };
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/like-post`, data);
    console.log("<3 post liked res.data <3", res.data);
    // setLikes(res.data.newPostsArr.length);
    const { isRemoved } = res.data;
    if (isRemoved) {
      setLikes((prevLikes) => prevLikes - 1);
    } else if (!isRemoved) {
      setLikes((prevLikes) => prevLikes + 1);
    }

    setLoading(false);
  };

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
              spacing={1}
              alignItems="center"
            >
              <Typography variant="h2">{post.postedBy}</Typography>
              <Typography variant="caption">{post.displayAddress}</Typography>
            </Stack>
            <Typography variant="body1">{post.post}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          { isFollowed && (
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
            >
              {!loading && (
              <Stack
                direction="row"
                alignItems="center"
              >
                <IconButton onClick={() => { likePost(post._id); }}><FavoriteIcon /></IconButton>
                <Typography variant="body1">{likes}</Typography>
              </Stack>
              )}
            </Stack>
          )}
        </Grid>
      </Grid>

    </div>
  );
}
