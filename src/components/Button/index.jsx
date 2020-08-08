import React from "react";
import classNames from "classnames";

import "./Button.sass";

const Button = ({ text, small, onClick }) => {
  return (
    <div
      className={classNames("button", {
        "button--small": small,
      })}
      onClick={onClick}
    >
      <button type="submit">{text}</button>
    </div>
  );
};

export default Button;
