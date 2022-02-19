import React, { useState } from "react";

export default function HandDownAddView({ setView }) {
  const goBack = () => {
    setView("handdownlist");
  };

  return (
    <div>
      <h1>HandDownAddView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button">Submit</button>
    </div>
  );
}
