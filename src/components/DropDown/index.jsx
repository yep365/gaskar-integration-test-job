import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { sidebarActions } from "../../redux/actions";

const DropDown = ({
  selectedDropdown,
  dropDown,
  text,
  newTasks,
  index,
  acitveSubNavbar,
}) => {
  const dispatch = useDispatch();

  const onDropdownClick = () => {
    if (acitveSubNavbar !== index) {
      dispatch(sidebarActions.setActiveSubNavbar(index));
    }
  };
  return (
    <div
      className={classNames("nav-select", {
        "nav-select--selected": selectedDropdown,
        "nav-select--dropdown": dropDown,
      })}
      onClick={onDropdownClick}
    >
      <div className="nav-select__text">{text}</div>
      <div className="nav-select__newtasks">{newTasks}</div>
    </div>
  );
};
export default DropDown;
