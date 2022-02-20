import React, { useState } from "react";

export default function HandDownDetailView({ setView }) {
  const goBack = () => {
    setView("handdownlist");
  };

  const goChatRoom = () => {
    setView("chat");
  };

  return (
    <div>
      <h1>HandDownDetailView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button" onClick={goChatRoom}>
        Im interested
      </button>
    </div>
  );
}
