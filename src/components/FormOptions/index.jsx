import React from "react";
import Switch from "../Switch/index";
import "./FormOptions.css";

function FormOptions({ handleClearAll, handleShowSelected }) {
  return (
    <div className="form_options">
      <div className="switch_container">
        <Switch handleShowSelected={handleShowSelected} />
        <p>Show selected only</p>
      </div>
      <p className="clear_all" onClick={handleClearAll}>
        Clear all
      </p>
    </div>
  );
}

export default FormOptions;
