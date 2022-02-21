/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

export default function ChatView({ setView }) {
  const [conversation, setConversation] = useState();

  const goBack = () => {
    setView("chatlist");
  };

  const sendMessage = () => {
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
      <h1>ChatView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      {conversation}
      <br />
      <input />
      {/* <button type="button" onClick={sendMessage} /> */}
    </div>
  );
}
