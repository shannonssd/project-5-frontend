/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Grid, Stack, Typography } from '@mui/material';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useAuthContext } from "../others/store";
import BottomBar from "../molecules/BottomBar";
import NavMenu from "../organisms/NavMenu";
import AddIcon from "../molecules/AddIcon";
import BackIcon from "../molecules/BackIcon";
import IgCard from "../organisms/IgCard";
import IgCardContainer from "../molecules/IgCardContainer";

export default function InterestGroupListPage() {
  const [followedGrps, setFollowedGrps] = useState();
  const [unfollowedGrps, setUnfollowedGrps] = useState();
  const history = useHistory();

  // authContext contains object with userId, name, displayAddress, district, token
  const { state } = useAuthContext();
  const { userId, district } = state;

  const displayIntGrps = (districtInterestGroups) => {
    console.log('districtInterestGroups', districtInterestGroups);
    const followedGrpsArr = [];
    const notFollowedGrpsArr = [];
    for (let i = 0; i < districtInterestGroups.length; i += 1) {
      let isFollowed = false;
      for (let j = 0; j < districtInterestGroups[i].members.length; j += 1) {
        if (districtInterestGroups[i].members[j].id === userId) {
          isFollowed = true;
        }
      }
      if (isFollowed) {
        followedGrpsArr.push(districtInterestGroups[i]);
      } else {
        notFollowedGrpsArr.push(districtInterestGroups[i]);
      }
    }

    const followedList = followedGrpsArr.map((group, index) => (
      <Grid item xs={6}>
        <IgCard
          key={index}
          image={group.bannerPhoto}
          header={group.name}
          handleView={() => { goGroup(group); }}
          handleButton={() => { leaveGroup(group._id); }}
          buttonIcon={<GroupRemoveIcon />}
        />
      </Grid>
    ));

    const unfollowedList = notFollowedGrpsArr.map((group, index) => (
      <Grid item xs={6}>
        <IgCard
          key={index}
          image={group.bannerPhoto}
          header={group.name}
          handleView={() => { goGroup(group); }}
          handleButton={() => { joinGroup(group._id); }}
          buttonIcon={<GroupAddIcon />}
        />
      </Grid>

    ));

    setFollowedGrps(followedList);
    setUnfollowedGrps(unfollowedList);
  };

  const joinGroup = async (id) => {
    const data = {
      interestGrpId: id,
      userId,
      district,
    };
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/follow-group`, data);
    displayIntGrps(res.data.districtInterestGroups);
  };

  const leaveGroup = async (id) => {
    const data = {
      interestGrpId: id,
      userId,
      district,
    };
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/unfollow-group`, data);
    displayIntGrps(res.data.districtInterestGroups);
  };

  useEffect(() => {
    async function loadIntGrpList() {
      const query = new URLSearchParams();
      query.append('userId', userId);
      query.append('district', district);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/interest-group/show-groups?${query.toString()}`);
      const { districtInterestGroups, usersInterestGroups } = res.data;
      console.log('<== res.data items array ajax ==>', districtInterestGroups, usersInterestGroups);
      displayIntGrps(districtInterestGroups);
    }
    loadIntGrpList();
  }, []);

  const goBack = () => {
    history.push('/home');
  };

  const goGroup = (groupData) => {
    history.push('/interest-group-detail', { params: groupData });
  };

  const addNewGroup = () => {
    history.push('/add-new-interest-group');
  };

  return (
    <div className="mobile">
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
        <BackIcon onClick={goBack} />
        <Typography variant="h1">
          Interest Groups
        </Typography>
      </Stack>
      <br />
      <br />
      <Typography variant="h2">
        Joined
      </Typography>
      <div className="ig-card-container">
        {followedGrps}
      </div>

      <br />
      <Typography variant="h2">
        Others
      </Typography>
      <div className="ig-card-container">
        {unfollowedGrps}
      </div>
      <BottomBar>
        <NavMenu />
        <AddIcon onClick={addNewGroup} />
      </BottomBar>
    </div>
  );
}
