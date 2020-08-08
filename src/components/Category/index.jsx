import React from "react";
import classNames from "classnames";

const Category = ({ text, selected, setselectedCategory, i }) => {
  const onSelectCategory = () => {
    setselectedCategory(i);
  };
  return (
    <div
      className={classNames("main-header__item", {
        "main-header__item--selected": selected,
      })}
      onClick={onSelectCategory}
    >
      {text}
    </div>
  );
};
export default Category;
