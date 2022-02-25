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
    <Post key={index} post={post} isFollowed={isFollowed} />
  ));

  return (
    <div>
      {postsList}
    </div>
  );
}
