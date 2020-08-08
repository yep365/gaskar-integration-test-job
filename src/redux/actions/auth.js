import { checkAuth, openNotification } from "../../utils/helpers";

const Actions = {
  setAuth: (status) => ({
    type: "AUTH:SET_AUTH",
    payload: status,
  }),
  setError: (err) => ({
    type: "AUTH:SET_ERROR",
    payload: err,
  }),
  fetchAuthStatus: (login, pass) => (dispatch) => {
    let postData = {
      login: login,
      password: pass,
    };
    let successMessage = {
      type: "success",
      title: "Вы успешно авторизованы!",
    };
    let wrongCridentialsMessage = {
      type: "error",
      title: "Проверьте свои логин или пароль!",
    };
    let serverErrMessage = {
      type: "error",
      title: "Проверьте свои логин или пароль!",
    };
    checkAuth(postData)
      .then(({ status }) => {
        if (status === "204") {
          dispatch(Actions.setAuth(true));
          openNotification(successMessage);
        } else {
          openNotification(wrongCridentialsMessage);
        }
      })
      .catch(() => {
        dispatch(Actions.setError("Сервер не доступен"));
        openNotification(serverErrMessage);
      });
  },
};
export default Actions;
