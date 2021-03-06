import { checkAuth, openNotification } from "../../utils/helpers";
import { userApi } from "../../utils/api";

const Actions = {
  setAuth: (status) => ({
    type: "AUTH:SET_AUTH",
    payload: status,
  }),
  setError: (err) => ({
    type: "AUTH:SET_ERROR",
    payload: err,
  }),
  logOut: () => (dispatch) => {
    dispatch(Actions.setAuth(false));
    delete window.localStorage.token;
    openNotification({
      title: "Вы успешно вышли из системы!",
      type: "success",
    });
  },
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
    //В реальном кейсе случае использовал бы
    // userApi.signIn(postData).then(({data})=> И т.д.)
    checkAuth(postData)
      .then(({ status, token }) => {
        if (status === "204") {
          dispatch(Actions.setAuth(true));
          window.localStorage["token"] = token;
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
