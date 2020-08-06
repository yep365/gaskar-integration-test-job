import React, { useRef, useState } from "react";
// import { Checkbox } from "antd";
import { Formik, Form, Field, ErrorMessage, Submit } from "formik";
import * as Yup from "yup";

import { FormPropsReceiver, Checkbox, Button } from "../../components";

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
            <div className="auth-form__input">
              <FormPropsReceiver
                isValid={isValid}
                dirty={dirty}
                errors={errors}
                validateForm={validateForm}
              />
              <label htmlFor="login">Логин</label>
              <Field type="text" id="login" name="login" placeholder="Логин" />
              <div className="auth-form__error">
                <ErrorMessage name="login" />
              </div>
            </div>
            <div className="auth-form__input">
              <label htmlFor="password">Пароль</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
              />
              <div className="auth-form__error">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="auth-form__checkbox" onClick={onToggleCheckBox}>
              <Checkbox checked={checkBoxState} readOnly />
              <p>Запомнить пароль</p>
            </div>
            <div className="auth-form__button">
              <Button text="Войти" />
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
