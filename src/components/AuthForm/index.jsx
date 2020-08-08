import React, { useRef, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  FormPropsReceiver,
  CheckboxLabel,
  Button,
  Input,
} from "../../components";
import { authActions } from "../../redux/actions";

import Logo from "../../assets/Logo.png";

import "./AuthForm.sass";

const AuthForm = () => {
  const [checkBoxState, setCheckBoxState] = useState(false);
  const { isAuth } = useSelector(({ auth }) => auth);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!!isAuth) {
      history.push("/");
    }
  }, [isAuth]);

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
        innerRef={formRef}
      >
        {({ isValid, dirty, errors, validateForm }) => (
          <Form>
            <div className="auth-form__content">
              {/* <FormPropsReceiver
                isValid={isValid}
                dirty={dirty}
                errors={errors}
                validateForm={validateForm}
              /> */}
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
