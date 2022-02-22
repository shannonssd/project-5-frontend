import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ChatListPage() {
  const [chatList, setChatList] = useState();
  const history = useHistory();
  const goChatRoom = () => {
    history.push('/chat-room');
  };
  const goBack = () => {
    history.push('/home');
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
      <h1>Chat List</h1>
      {chatList}
      <br />
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
