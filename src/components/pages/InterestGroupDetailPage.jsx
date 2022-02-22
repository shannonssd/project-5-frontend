import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function InterestGroupDetailPage() {
  const history = useHistory();
  const goBack = () => {
    history.push('/interest-group-list');
  };

  return (
    <div>
      <h1>Specific Interest Group</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
