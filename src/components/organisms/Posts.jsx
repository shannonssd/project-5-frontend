/* eslint-disable react/no-array-index-key */
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
import { Divider, Stack } from '@mui/material';
import React from 'react';
import Post from './Post';

/*
 * ========================================================
 * ========================================================
 *
 *          Component for all rendering posts
 *
 * ========================================================
 * ========================================================
 */
export default function Posts({ posts, isFollowed }) {
  if (!posts) {
    return <div />;
  }

  const postsList = posts.map((post, index) => (
    <div>
      <Post key={index} post={post} isFollowed={isFollowed} />
      <br />
      <Divider />
    </div>
  ));

  return (
    <Stack
      direction="column"
      spacing={2}
      height="300px"
      overflow="auto"
    >
      {postsList}
    </Stack>
  );
}
