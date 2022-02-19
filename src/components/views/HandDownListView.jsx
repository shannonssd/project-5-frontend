import React, { useState } from "react";

export default function HandDownListView({ setView }) {
  const goItem = () => {
    setView("handdowndetail");
  };

  const addItem = () => {
    setView("handdownadd");
  };

  const goBack = () => {
    setView("home");
  };

  return (
    <div>
      <h1>HandDownListView</h1>
      <button type="button" onClick={goItem}>
        Item Detail
      </button>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
