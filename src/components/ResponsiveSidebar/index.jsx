import React from "react";
import HamburgerMenu from "react-hamburger-menu";

import { Sidebar } from "../../components";

const ResponsiveSidebar = ({ openBurger, setOpenBurger }) => {
  const onBurgerClick = () => {
    setOpenBurger(!openBurger);
  };
  return (
    <>
      <div className="panel__sidebar">
        <Sidebar />
      </div>
      {openBurger && window.innerWidth <= 750 && (
        <div className="main-mobile__sidebar">
          <Sidebar setOpenBurger={setOpenBurger} />
        </div>
      )}
      <div className="main-mobile__burger">
        <HamburgerMenu
          isOpen={openBurger}
          width={18}
          height={18}
          strokeWidth={3}
          rotate={0}
          color="#b331cb"
          borderRadius={0}
          animationDuration={0.2}
          menuClicked={onBurgerClick}
        />
      </div>
    </>
  );
};

export default ResponsiveSidebar;
