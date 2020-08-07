import React from "react";
import { Field, ErrorMessage } from "formik";

import "./Input.sass";

const Input = ({ label, placeholder = "", name, id, type }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type ?? "text"}
        id={id ?? name}
        name={name}
        placeholder={placeholder}
      />
      <div className="input-error">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
