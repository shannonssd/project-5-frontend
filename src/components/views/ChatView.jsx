import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

export default function ChatView({ setView }) {
  const goBack = () => {
    setView("chatlist");
  };
  useEffect(() => {
    const socket = io.connect('http://localhost:3004', { reconnection: false });

    socket.on('plswork', () => { socket.emit('id'); });
  }, []);
  return (
    <div>
      <h1>ChatView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
