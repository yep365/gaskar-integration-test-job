import React from "react";
import classNames from "classnames";

const ProjectsCategory = ({ text, selected, setselectedCategory, i }) => {
  const onSelectCategory = () => {
    setselectedCategory(i);
  };
  return (
    <div
      className={classNames("projects-header__item", {
        "projects-header__item--selected": selected,
      })}
      onClick={onSelectCategory}
    >
      {text}
    </div>
  );
};
export default ProjectsCategory;
