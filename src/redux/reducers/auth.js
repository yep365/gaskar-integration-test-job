const initialState = {
  isAuth: false,
  error: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "AUTH:SET_AUTH":
      return {
        ...state,
        isAuth: payload,
      };
    case "AUTH:SET_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
