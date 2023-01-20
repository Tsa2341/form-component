import React from "react";
import "./CustomInput.css";

function CustomInput({ handleOnChange }) {
  return (
    <div className="custom_input">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search"
        autoFocus
      />
    </div>
  );
}

export default CustomInput;
