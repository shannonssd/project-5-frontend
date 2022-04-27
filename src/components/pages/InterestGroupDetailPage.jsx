/* eslint-disable max-len */
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
import {
  Stack, Typography, CardMedia, IconButton, Grid,
} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import { useAuthContext } from "../others/store";
import Posts from '../organisms/Posts';
import BackIcon from "../molecules/BackIcon";
import MessageInput from "../molecules/MessageInput";

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
  // authContext contains object with userId, name, displayAddress, district, token
  const { state } = useAuthContext();
  const {
    name, photo, displayAddress, userId,
  } = state;

  const currentMembers = groupData.members;
  let isFollowed = false;
  for (let i = 0; i < currentMembers.length; i += 1) {
    if (currentMembers[i].id === userId) {
      isFollowed = true;
    }
  }
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

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/new-post`, data)
      .then((response) => {
        // Update posts
        setPostsArr(response.data.newPostsArr);
      });
  };

  return (
    <div className="mobile">
      <Stack
        direction="row"
        alignItems="center"
      >
        <BackIcon onClick={goBack} />
      </Stack>
      <CardMedia component="img" image={groupData.bannerPhoto} alt={groupData.bannerPhoto.toString()} height="130" />
      <Typography variant="h1">{groupData.name}</Typography>
      <Typography variant="h2">{groupData.description}</Typography>

      <Grid container>
        <Grid item xs={6}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <IconButton diabled>
              <AdminPanelSettingsRoundedIcon />
            </IconButton>
            <Stack
              direction="column"
              spacing={0}
              justifyContent="flex-start"
            >
              <Typography variant="body1">
                Admin
              </Typography>
              <Typography variant="body1">
                {groupData.creatorName}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          { isFollowed && (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <IconButton onClick={() => { showMemberList(groupData.members); }}>
              <AccountCircleRoundedIcon />
            </IconButton>
            <Stack
              direction="column"
              spacing={0}
              justifyContent="flex-start"
            >
              <Typography variant="body1">
                Members
              </Typography>
              <Typography variant="body1">
                {groupData.members.length}
              </Typography>
            </Stack>
          </Stack>
          )}
        </Grid>
      </Grid>
      <br />
      <Posts posts={postsArr} isFollowed={isFollowed} />

      <MessageInput
        id="post"
        handleInput={(e) => setPost(e.target.value)}
        handleSend={sendInfoToDB}
      />
    </div>
  );
}
