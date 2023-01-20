import React from "react";
import "./CustomCheckBox.css";

function CustomCheckBox({ checked, handleChange }) {
  return (
    <div className="custom_check_box">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span></span>
    </div>
  );
}

export default CustomCheckBox;
