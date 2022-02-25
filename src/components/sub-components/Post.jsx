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
import { useAuthContext } from "../others/store";

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
      {/* <img src={post.posteePhoto} alt="" /> */}
      <div>{post.postedBy}</div>
      <div>{post.displayAddress}</div>
      <div>{post.post}</div>
      { isFollowed ? (
        <div>
          <button type="button" onClick={() => { likePost(post._id); }}>like</button>
          <span>
            {' '}
            {likes}
          </span>
        </div>
      ) : <div />}
    </div>
  );
}
