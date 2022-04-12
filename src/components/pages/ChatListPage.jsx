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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import ChatRow from "../molecules/ChatRow";
import BackIcon from "../molecules/BackIcon";

/*
 * ========================================================
 * ========================================================
 *
 *             Component for ChatListPage
 *
 * ========================================================
 * ========================================================
 */
export default function ChatListPage() {
  const [chatList, setChatList] = useState();
  const history = useHistory();

  const goChatRoom = (id) => {
    history.push('/chat-room', { params: id });
  };

  const goBack = () => {
    history.push('/home');
  };

  useEffect(() => {
    // Send user data to backend to get list of conversations
    const data = new URLSearchParams();
    const userId = localStorage.getItem('userId');
    data.append('userId', userId);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/chats/show-chats?${data.toString()}`)
      .then((response) => {
        // Output textee list from received data
        const uniqueTexteeIdArr = response.data.texteeData;
        const chatListArr = uniqueTexteeIdArr.map((user) => (
          <ChatRow
            onClick={() => goChatRoom(user._id)}
            texteePhoto={user.userDetails.photo}
            texteeName={user.userDetails.name}
          />
        ));
        setChatList(chatListArr);
      });
  }, []);

  return (
    <div className="mobile">
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        marginBottom={2}
      >
        <BackIcon onClick={goBack} />
        <Typography variant="h1"> Chat </Typography>
      </Stack>
      {chatList}
      <br />
    </div>
  );
}
