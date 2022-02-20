import React, { useState } from "react";

export default function ChatView({ setView }) {
  const goBack = () => {
    setView("chatlist");
  };

  return (
    <div>
      <h1>ChatView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
