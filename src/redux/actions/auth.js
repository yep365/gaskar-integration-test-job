const Actions = {
  setAuth: (status) => ({
    type: "AUTH:SET_AUTH",
    payload: status,
  }),
  setValidation: (status) => ({
    type: "AUTH:SET_VALIDATION",
    payload: status,
  }),
};
export default Actions;
