import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function InterestGroupListPage() {
  const history = useHistory();
  const goGroup = () => {
    history.push('/interest-group-detail');
  };

  const goBack = () => {
    history.push('/home');
  };

  return (
    <div>
      <h1>InterestGroupList</h1>
      <button type="button" onClick={goGroup}>
        Sample Interest Group
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
