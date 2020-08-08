import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../../redux/actions";

const FormPropsReceiver = ({ isValid, dirty, validateForm, errors }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isValid === true && dirty === true && Object.keys(errors) < 1) {
  //     dispatch(authActions.setValidation(true));
  //   } else {
  //     dispatch(authActions.setValidation(false));
  //   }
  // }, [isValid, dirty, errors]);

  // useEffect(() => {
  //   (() => validateForm())();
  // }, []);

  return null;
};

export default FormPropsReceiver;
