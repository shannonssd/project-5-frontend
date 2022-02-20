import React, { useState } from "react";

export default function AuthView({ setView }) {
  const signIn = () => {
    setView("home");
  };

  return (
    <div>
      <h1>AuthView</h1>
      <button type="button" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
}
