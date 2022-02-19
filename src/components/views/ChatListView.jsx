import React, { useState } from "react";

export default function ChatListView({ setView }) {
  const goChatRoom = () => {
    setView("chat");
  };

  const goBack = () => {
    setView("home");
  };

  return (
    <div>
      <h1>ChatListView</h1>
      <button type="button" onClick={goChatRoom}>
        Chat Room
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
