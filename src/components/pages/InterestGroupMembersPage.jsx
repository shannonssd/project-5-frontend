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

  const goBack = () => {
    history.push('/interest-group-list');
  };

  // Get interest group data from previous component
  const membersArr = location.state.params;
  const membersList = membersArr.map((member) => (
    <div>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button" onClick={() => goChatRoom(member.id)}>
        <div>{member.name}</div>
        <img src={member.photo} alt="" />
        <div>{member.displayAddress}</div>
      </button>
    </div>
  ));

  return (
    <div>{membersList}</div>
  );
}
