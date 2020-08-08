import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, Submit } from "formik";
import * as Yup from "yup";

import {
  FormPropsReceiver,
  CheckboxLabel,
  Button,
  Input,
} from "../../components";

import Logo from "../../assets/Logo.png";

import "./AuthForm.sass";

const AuthForm = () => {
  const [checkBoxState, setCheckBoxState] = useState(false);
  const formRef = useRef(null);
  let errUpLoading = true;
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };
  const initialValues = {
    login: "",
    password: "",
  };
  const validationSchema = Yup.object({
    login: Yup.string().required("Введите Логин"),
    password: Yup.string().required("Введите Пароль"),
  });
  const onSubmit = (values, { resetForm }) => {
    // dispatch(cellActions.setValidation(false));
  };
  const onToggleCheckBox = () => {
    setCheckBoxState(!checkBoxState);
  };
  return (
    <div className="auth-form">
      <div className="auth-form__logo">
        <img src={Logo} alt={Logo} />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        innerRef={formRef}
      >
        {({ isValid, dirty, errors, validateForm }) => (
          <Form>
            <div className="auth-form__content">
              <FormPropsReceiver
                isValid={isValid}
                dirty={dirty}
                errors={errors}
                validateForm={validateForm}
              />
              <Input label="Логин" placeholder="Логин" name="login" />
              <Input
                label="Пароль"
                placeholder="Пароль"
                name="password"
                type="password"
              />
              <CheckboxLabel
                text="Запомнить пароль"
                onToggleCheckBox={onToggleCheckBox}
                checkBoxState={checkBoxState}
              />
              <div className="auth-form__button">
                <Button text="Войти" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* {errUpLoading && (
        <div className="auth-form-alert">
          <Alert
            message="Не удалось авторизоваться, проверте логин и пароль."
            type="error"
          />
        </div>
      )} */}
    </div>
  );
};

export default AuthForm;
