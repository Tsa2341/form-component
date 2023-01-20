import React from "react";
import "./Switch.css";

function Switch({ handleShowSelected }) {
  return (
    <div className="switch">
      <input type="checkbox" onChange={handleShowSelected} />
      <span className="slider"></span>
    </div>
  );
}

export default Switch;
