/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { useHistory, useLocation } from "react-router-dom";

export default function ChatRoomPage() {
  // Establish socket connection upon entering room
  const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);

  const location = useLocation();
  const history = useHistory();
  const [conversation, setConversation] = useState();
  const [texteeName, setTexteeName] = useState();
  const [texteeAddress, setTexteeAddress] = useState();
  const [texteePhoto, setTexteePhoto] = useState();
  const [displayMessage, setDisplayMessage] = useState();

  // Get user ids
  const texteeId = location.state.params;
  const userId = localStorage.getItem('userId');

  const goBack = () => {
    history.push('/chat-list');
  };

  const goHome = () => {
    history.push('/home');
  };

  const convertMessageArrToConverastion = (arr) => {
    const messageArr = arr.map((message) => (
      <div>
        {message.senderId === userId ? <div style={{ color: "red" }}>{message.message}</div> : <div style={{ color: "blue" }}>{message.message}</div>}
      </div>
    ));
    setConversation(messageArr);
  };

  // On page load do the following
  useEffect(() => {
    const data = {
      onlineUserId: userId,
      texteeId,
    };

    // On request from backend, send user data
    socket.on('Send data', () => {
      socket.emit('Sent data to backend', data);

      // Upon receiving textee data, display on browser
      socket.on('All messages', (sendData) => {
        setTexteeName(sendData.sendData.user.userDetails.name);
        setTexteePhoto(sendData.sendData.user.userDetails.photo);
        setTexteeAddress(sendData.sendData.user.addressDetails.displayAddress);
        const allMessagesArr = sendData.sendData.allMessages;
        convertMessageArrToConverastion(allMessagesArr);
      });
    });

    // If user leaves chat room, disconnect from socket so that their document is removed from Online Chat collection
    return () => {
      socket.disconnect();
    };
  }, []);

  // Callback to send message to DB
  const sendInfoToDB = () => {
    // Clear input field
    document.getElementById('message').value = '';

    const data = {
      message: displayMessage,
      senderId: userId,
      receiverId: texteeId,
    };

    // Send new message to backend
    socket.emit('Send message', data);

    // Display latest conversation once received
    socket.on('Latest conversation ', (allMessages) => {
      console.log(allMessages.allMessages);
      convertMessageArrToConverastion(allMessages.allMessages);
    });
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button" onClick={goHome}>
        Home
      </button>
      <br />
      <br />
      {texteeName}
      <br />
      {texteeAddress}
      <br />
      <img src={texteePhoto} alt="Textee Photo" />
      <br />
      {conversation}
      <br />
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Input Message Here!"
        onChange={(event) => setDisplayMessage(event.target.value)}
      />
      <button type="submit" onClick={sendInfoToDB}>
        Submit
        {' '}
      </button>
    </div>
  );
}
