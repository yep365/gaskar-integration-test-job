export default (arr, history) => {
  let index;
  let nestedIndex;
  arr.forEach((obj, i) => {
    Object.values(obj).forEach((value) => {
      if (typeof value === "object") {
        Object.values(value).forEach((nestedValue, ni) => {
          if (nestedValue.link === history.location.pathname) {
            index = i;
            nestedIndex = ni;
            return;
          }
        });
      }
      if (value === history.location.pathname) {
        return (index = i);
      }
    });
  });
  const returnObj = {
    index: index,
    nestedIndex,
  };
  return returnObj;
};
