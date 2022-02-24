/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../others/store";

export default function InterestGroupListPage() {
  const [followedGrps, setFollowedGrps] = useState();
  const [unfollowedGrps, setUnfollowedGrps] = useState();
  const history = useHistory();

  // authContext contains object with userId, name, displayAddress, district, token
  const { state } = useAuthContext();
  const { userId, district } = state;

  const displayIntGrps = (districtInterestGroups) => {
    console.log('interesGRPPPPPPS', districtInterestGroups);
    const followedGrpsArr = [];
    const notFollowedGrpsArr = [];
    for (let i = 0; i < districtInterestGroups.length; i += 1) {
      let isFollowed = false;
      console.log('jo');
      for (let j = 0; j < districtInterestGroups[i].members.length; j += 1) {
        if (districtInterestGroups[i].members[j].id === userId) {
          console.log('hoiyah');
          isFollowed = true;
        // followedGrpsArr.push(districtInterestGroups[i]);
        }
      //   // else {
      //   //   notFollowedGrpsArr.push(districtInterestGroups[i]);
      //   // }
      }
      if (isFollowed) {
        followedGrpsArr.push(districtInterestGroups[i]);
      } else {
        notFollowedGrpsArr.push(districtInterestGroups[i]);
      }
    }

    const followedList = followedGrpsArr.map((group) => (
      <div>
        {/* <img src={group.bannerPhoto} alt=""  /> */}
        <div>{group.name}</div>
        <button type="button" onClick={() => { leaveGroup(group._id); }}>
          Leave
        </button>
        <button type="button" onClick={goGroup}>
          View
        </button>
      </div>
    ));

    const unfollowedList = notFollowedGrpsArr.map((group) => (
      <div>
        {/* <img src={group.bannerPhoto} alt="" /> */}
        <div>{group.name}</div>
        <button type="button" onClick={() => { joinGroup(group._id); }}>
          Join
        </button>
        <button type="button" onClick={goGroup}>
          View
        </button>
      </div>
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

  const goGroup = () => {
    history.push('/interest-group-detail');
  };

  const addNewGroup = () => {
    history.push('/add-new-interest-group');
  };

  return (
    <div>
      <h1>Interest Groups</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button" onClick={addNewGroup}>
        Add Group
      </button>
      <br />
      <br />

      <div>
        Your Interest Groups:
        {" "}
        {followedGrps}
      </div>
      <br />
      <div>
        Other Interest Groups:
        {" "}
        {unfollowedGrps}
      </div>
    </div>
  );
}
