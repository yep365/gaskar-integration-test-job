import { combineReducers } from "redux";

const reducers = ["auth", "sidebar", "projects"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
