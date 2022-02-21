import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChatListView({ setView }) {
  const [chatList, setChatList] = useState();
  const goChatRoom = () => {
    setView("chat");
  };

  const goBack = () => {
    setView("home");
  };

  useEffect(() => {
    const data = new URLSearchParams();
    // ############################## TO REPLACE USERID WITH VARIABLE ##############################
    data.append('userId', '6210d8e48c88c11c66e08ecc');
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/chats/show-chats?${data.toString()}`)
      .then((response) => {
        const uniqueTexteeIdArr = response.data.texteeData;
        const chatListArr = uniqueTexteeIdArr.map((user) => (
          <button type="button" onClick={goChatRoom}>
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
      <h1>ChatListView</h1>
      {chatList}
      <br />
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
