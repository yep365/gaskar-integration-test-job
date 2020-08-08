export default (postData) => {
  return new Promise((resolve, reject) => {
    if (postData.login === "admin" && postData.password === "admin") {
      resolve({
        status: "204",
        message: "success",
        token: String(Math.random()),
      });
    } else {
      resolve({
        status: "401",
        message: "error",
      });
    }
  });
};
