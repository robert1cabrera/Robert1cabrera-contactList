import React from "react";

export default function form() {
  return (
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Example label
      </label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Example input placeholder"
      />
    </div>
  );
}