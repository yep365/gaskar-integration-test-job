import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { CheckboxLabel, Button, Input } from "../../components";
import { authActions } from "../../redux/actions";

import Logo from "../../assets/Logo.png";

import "./AuthForm.sass";

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [checkBoxState, setCheckBoxState] = useState(false);
  const { isAuth } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (!!isAuth) {
      history.push("/projects");
    }
  }, [isAuth]);

  const initialValues = {
    login: "",
    password: "",
  };
  const validationSchema = Yup.object({
    login: Yup.string().required("Введите Логин"),
    password: Yup.string().required("Введите Пароль"),
  });
  const onSubmit = ({ login, password }) => {
    dispatch(authActions.fetchAuthStatus(login, password));
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
      >
        {({ isValid, dirty, errors, validateForm }) => (
          <Form>
            <div className="auth-form__content">
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
    </div>
  );
};

export default AuthForm;
