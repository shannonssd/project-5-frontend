import React, { useState } from "react";

export default function InterestGroupDetailView({ setView }) {
  const goBack = () => {
    setView("interestgrouplist");
  };

  return (
    <div>
      <h1>InterestGroupDetailView</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
