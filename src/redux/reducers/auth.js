const initialState = {
  auth: false,
  validation: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "AUTH:SET_AUTH":
      return {
        ...state,
        auth: payload,
      };
    case "AUTH:SET_VALIDATION":
      return {
        ...state,
        validation: payload,
      };

    default:
      return state;
  }
};
