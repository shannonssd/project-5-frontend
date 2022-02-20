import React, { useState } from "react";

export default function HomeView({ setView }) {
  const goChat = () => {
    setView("chatlist");
  };

  const goHandDown = () => {
    setView("handdown-page");
  };

  const goInterestGroup = () => {
    setView("interestgrouplist");
  };

  const signOut = () => {
    setView("auth");
  };

  return (
    <div>
      <h1>HomeView</h1>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
      <button type="button">Notice Board</button>
      <button type="button" onClick={goChat}>
        Chat
      </button>
      <button type="button" onClick={goHandDown}>
        Hand-me-downs
      </button>
      <button type="button" onClick={goInterestGroup}>
        Interest Group
      </button>
    </div>
  );
}
