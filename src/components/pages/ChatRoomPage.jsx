import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ChatRoomPage() {
  const history = useHistory;
  const goBack = () => {
    history.push('/chat-all');
  };

  const goHome = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <button type="button" onClick={goHome}>
        Home
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
