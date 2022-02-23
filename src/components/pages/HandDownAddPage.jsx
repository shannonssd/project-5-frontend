import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../sub-components/Form";

export default function HandDownAddPage() {
  const goBack = () => {
    const history = useHistory();
    history.push('/hmd-list');
  };

  return (
    <div>
      <h1>Add an item</h1>
      <Form />
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button">Submit</button>
    </div>
  );
}
