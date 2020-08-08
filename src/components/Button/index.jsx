import React from "react";
import classNames from "classnames";

import "./Button.sass";

const Button = ({ text, small, fontSize }) => {
  return (
    <div
      className={classNames("button", {
        "button--small": small,
      })}
    >
      <button type="submit" style={{ fontSize: fontSize }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
