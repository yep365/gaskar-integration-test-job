const initialState = {
  acitveNavbar: 1,
  acitveSubNavbar: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIDEBAR:SET_ACTIVE_NAVBAR":
      return {
        ...state,
        acitveNavbar: payload,
      };
    case "SIDEBAR:SET_ACTIVE_SUB_NAVBAR":
      return {
        ...state,
        acitveSubNavbar: payload,
      };

    default:
      return state;
  }
};
