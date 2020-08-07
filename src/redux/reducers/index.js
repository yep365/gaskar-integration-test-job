import { combineReducers } from "redux";

const reducers = ["auth", "sidebar"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
