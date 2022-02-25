/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { useHistory, useLocation } from "react-router-dom";
import {
  Avatar, Typography, Stack, IconButton, InputBase, Paper,
} from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BackIcon from "../molecules/BackIcon";
import TexterBubble from "../molecules/TexterBubble";
import TexteeBubble from "../molecules/TexteeBubble";

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

  // Get user ids from previous component
  const texteeId = location.state.params;
  const userId = localStorage.getItem('userId');

  const goBack = () => {
    // Go back to previous page
    // User could have reached chat via chat or handmedown
    history.goBack();
    // history.push('/chat-list');
  };

  const goHome = () => {
    history.push('/home');
  };

  const convertMessageArrToConverastion = (arr) => {
    const messageArr = arr.map((message) => (
      <div>
        {message.senderId === userId ? <TexterBubble text={message.message} /> : <TexteeBubble text={message.message} /> }
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
    socket.on('Latest conversation', (allMessages) => {
      console.log('MESSAGE RECEIVED');
      convertMessageArrToConverastion(allMessages.allMessages);
    });
  };

  return (
    <div className="mobile">
      <BackIcon onClick={goBack} />
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Avatar src={texteePhoto} alt={texteeName} sx={{ width: 40, height: 40 }} />
        <Typography variant="h2">
          {texteeName}
        </Typography>
      </Stack>
      <br />
      <Stack
        spacing={1}
        overflow="scroll"
        height="400px"
      >
        {conversation}
      </Stack>
      <br />
      <Paper className="message-input">
        <InputBase
          sx={{ flex: 1 }}
          onChange={(event) => setDisplayMessage(event.target.value)}
        />
        <IconButton onClick={sendInfoToDB}>
          <SendRoundedIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
