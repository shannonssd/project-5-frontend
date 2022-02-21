import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ChatListPage() {
  const history = useHistory;
  const goChatRoom = () => {
    history.push('/chat-room');
  };
  const goBack = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <button type="button" onClick={goChatRoom}>
        Chat Room
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
