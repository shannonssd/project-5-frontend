import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();
  const goChat = () => {
    history.push('/chat');
  };

  const goHandDown = () => {
    history.push('/hmd-list');
  };

  const goInterestGroup = () => {
    history.push('/interest-group-list');
  };

  const signOut = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Home Page</h1>
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
