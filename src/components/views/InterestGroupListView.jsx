import React, { useState } from "react";

export default function InterestGroupListView({ setView }) {
  const goGroup = () => {
    setView("interestgroupdetail");
  };

  const goBack = () => {
    setView("home");
  };

  return (
    <div>
      <h1>InterestGroupListView</h1>
      <button type="button" onClick={goGroup}>
        Sample Interest Group
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
