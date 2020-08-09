const Actions = {
  setActiveNavbar: (status) => ({
    type: "SIDEBAR:SET_ACTIVE_NAVBAR",
    payload: status,
  }),
  setActiveSubNavbar: (status) => ({
    type: "SIDEBAR:SET_ACTIVE_SUB_NAVBAR",
    payload: status,
  }),
};
export default Actions;
