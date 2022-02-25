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
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from "../others/store";
import Posts from '../sub-components/Posts';

/*
 * ========================================================
 * ========================================================
 *
 *       Component for all individual interest group
 *
 * ========================================================
 * ========================================================
 */
export default function InterestGroupDetailPage() {
  const history = useHistory();
  const location = useLocation();
  const [post, setPost] = useState();
  const [postsArr, setPostsArr] = useState();

  // Get interest group data from previous component
  const groupData = location.state.params;
  console.log('groupData', groupData);
  // authContext contains object with userId, name, displayAddress, district, token
  const { state } = useAuthContext();
  const {
    name, photo, displayAddress, userId,
  } = state;
  console.log('CONTEXT INSIDE OF IG PAGE', name, photo, displayAddress);

  const currentMembers = groupData.members;
  let isFollowed = false;
  for (let i = 0; i < currentMembers.length; i += 1) {
    if (currentMembers[i].id === userId) {
      isFollowed = true;
    }
  }
  console.log('ARE YOU EVEN FOLLOWING', isFollowed);
  console.log('membs', currentMembers);
  const goBack = () => {
    history.push('/interest-group-list');
  };

  const showMemberList = (members) => {
    history.push('/interest-group-members', { params: members });
  };

  // Show posts when page renders
  useEffect(() => {
    setPostsArr(groupData.posts);
  }, []);

  // Callback  to send photo, address and userId to DB
  const sendInfoToDB = (event) => {
    // Clear input field
    document.getElementById('post').value = '';
    // Prevent page from refreshing
    event.preventDefault();

    const data = {
      userName: name,
      userPhoto: photo,
      displayAddress,
      post,
      interestGrpId: groupData._id,
    };
    console.log('DATAAAA', data);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/new-post`, data)
      .then((response) => {
        // Update posts
        setPostsArr(response.data.newPostsArr);
      });
  };

  return (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <h1>{groupData.name}</h1>
      <img src={groupData.bannerPhoto} alt="" />
      <h3>{groupData.description}</h3>
      <h4>
        Created By:
        {' '}
        {groupData.creatorName}
      </h4>
      { isFollowed ? (
        <div>
          <button type="button" onClick={() => { showMemberList(groupData.members); }}>
            {' '}
            Members:
            {' '}
            {groupData.members.length}
          </button>
          <br />
          <br />
          <input
            type="text"
            id="post"
            name="post"
            onChange={(event) => setPost(event.target.value)}
          />
          <button type="submit" onClick={sendInfoToDB}>
            Submit
            {' '}
          </button>
        </div>
      ) : <div />}
      <br />
      <br />
      <Posts posts={postsArr} isFollowed={isFollowed} />
    </div>
  );
}
