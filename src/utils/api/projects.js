import { axios } from "../../core";

export default {
  send: (postData) => axios.post("/projects", postData),
};
