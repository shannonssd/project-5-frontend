/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { useHistory } from "react-router-dom";

export default function ChatRoomPage() {
  const history = useHistory();
  const [conversation, setConversation] = useState();

  const goBack = () => {
    history.push('/chat-list');
  };

  const goHome = () => {
    history.push('/home');
  };

  useEffect(() => {
    const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`, { reconnection: false });
    // ############################## TO REPLACE VARIABLEs ##############################
    const data = {
      onlineUserId: '6210d8e48c88c11c66e08ecc',
      texteeId: '6211c91aea97e852e279632c',
    };
    socket.on('Send data', () => {
      socket.emit('Sent data to backend', data);
      socket.on('All messages', (allMessages) => {
        console.log(allMessages.allMessages);
        const allMessagesArr = allMessages.allMessages;
        const messageArr = allMessagesArr.map((message) => (
          <>
            {/* // ############################## TO REPLACE VARIABLEs ############################## */}
            {message.senderId === '6210d8e48c88c11c66e08ecc' ? <div style={{ color: "red" }}>{message.message}</div> : <div style={{ color: "blue" }}>{message.message}</div>}
          </>
        ));
        setConversation(messageArr);
      });
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Chat Room</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button" onClick={goHome}>
        Home
      </button>
      {conversation}
      <br />
      <input />
      {/* <button type="button" onClick={sendMessage} /> */}
    </div>
  );
}
