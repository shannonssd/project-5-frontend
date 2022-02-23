/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ChatListPage() {
  const [chatList, setChatList] = useState();
  const history = useHistory();

  const goChatRoom = (id) => {
    console.log('I NEED THIS ID', id);
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
          <button type="button" onClick={() => goChatRoom(user._id)}>
            <br />
            <div>{user.userDetails.name}</div>
            <img src={user.userDetails.photo} alt="" />
          </button>
        ));
        setChatList(chatListArr);
      });
  }, []);

  return (
    <div>
      <h1>Chat List</h1>
      {chatList}
      <br />
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
