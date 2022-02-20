import React, { useState } from "react";
import Form from "../hand-me-down/Form";

export default function HandDownAddView({ setHandDownView }) {
  const goBack = () => {
    setHandDownView("handdownlist");
  };

  return (
    <div>
      <h1>HandDownAddView</h1>
      <Form />
      <button type="button" onClick={goBack}>
        Back
      </button>
      <button type="button">Submit</button>
    </div>
  );
}
