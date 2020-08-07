import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { sidebarActions } from "../../redux/actions";
import { DropDown } from "../../components";

import NavDropdown from "../../assets/NavDropdown.png";
import Arrow from "../../assets/arrow.svg";

import "./NavSelect.sass";

const NavSelect = ({
  text,
  newTasks,
  dropDownItems,
  acitveSubNavbar,
  selected,
  index,
  acitveNavbar,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const animation = {
    transform: `rotate(${selected && isOpen ? `180` : `0`}deg)`,
    transition: "all 0.4s ease-in-out",
  };

  useEffect(() => {
    if (selected && dropDownItems) {
      setIsOpen(true);
    }
  }, [acitveNavbar]);

  const onOpenDropdown = () => setIsOpen(!isOpen);

  const handleClick = () => {
    dispatch(sidebarActions.setActiveNavbar(index));
    if (dropDownItems) {
      onOpenDropdown();
    }
  };

  return (
    <>
      <div
        className={classNames("nav-select", {
          "nav-select--selected": selected,
        })}
        onClick={handleClick}
      >
        <img
          className="nav-select__logo"
          src={NavDropdown}
          alt={NavDropdown}
          style={animation}
        />
        <div className="nav-select__text">{text}</div>
        <div className="nav-select__newtasks">{newTasks}</div>
        {dropDownItems && (
          <>
            <div className="dropdown">
              <img
                className="dropdown-logo"
                src={Arrow}
                alt={Arrow}
                style={animation}
              />
            </div>
          </>
        )}
      </div>
      {isOpen && selected && (
        <>
          {dropDownItems.map((item, index) => (
            <DropDown
              selectedDropdown={Number(index) === Number(acitveSubNavbar)}
              text={item.text}
              newTasks={item.newTasks}
              dropDown
              key={index}
              index={index}
              acitveSubNavbar={acitveSubNavbar}
            />
          ))}
        </>
      )}
    </>
  );
};

export default NavSelect;
