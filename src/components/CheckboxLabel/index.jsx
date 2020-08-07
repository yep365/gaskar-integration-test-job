import React from "react";

import { Checkbox } from "../../components";

import "./CheckboxLabel.sass";

const CheckboxLabel = ({ onToggleCheckBox, checkBoxState, text }) => {
  return (
    <div className="checkbox" onClick={onToggleCheckBox}>
      <Checkbox checked={checkBoxState} readOnly />
      <p>{text}</p>
    </div>
  );
};

export default CheckboxLabel;
