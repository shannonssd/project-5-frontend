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
import { useHistory, useLocation } from "react-router-dom";
import { Stack, Typography } from '@mui/material';
import BackIcon from '../molecules/BackIcon';
import MemberRow from '../molecules/MemberRow';

/*
 * ========================================================
 * ========================================================
 *
 *          Component for all rendering posts
 *
 * ========================================================
 * ========================================================
 */
export default function InterestGroupMembersPage() {
  const history = useHistory();
  const location = useLocation();

  const goChatRoom = (id) => {
    history.push('/chat-room', { params: id });
  };

  // Get interest group data from previous component
  const membersArr = location.state.params;
  const membersList = membersArr.map((member) => (
    <MemberRow photo={member.photo} name={member.name} address={member.displayAddress} onClick={() => goChatRoom(member.id)} />

  ));

  return (
    <div className="mobile">
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
        <BackIcon onClick={history.goBack} />
        <Typography variant="h1">
          Members
        </Typography>
      </Stack>
      {membersList}
    </div>
  );
}
