import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { sidebarActions } from "../../redux/actions";

import "./DropDown.sass";

const DropDown = ({
  selectedDropdown,
  dropDown,
  text,
  newTasks,
  index,
  acitveSubNavbar,
  link,
  history,
  setOpenBurger,
}) => {
  const dispatch = useDispatch();

  const onDropdownClick = () => {
    if (acitveSubNavbar !== index) {
      history.push(link);
      dispatch(sidebarActions.setActiveSubNavbar(index));
      if (window.innerWidth < 750) {
        setOpenBurger(false);
      }
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
