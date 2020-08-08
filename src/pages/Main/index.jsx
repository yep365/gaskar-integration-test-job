import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "react-hamburger-menu";
import { Route, Redirect, Switch } from "react-router-dom";

import { openNotification } from "../../utils/helpers";
import { authActions, sidebarActions } from "../../redux/actions";
import { Badge, Sidebar } from "../../components";
import { ProjectsPanel, EmptyPage } from "../../pages";

import "./Main.sass";

const Main = () => {
  const [openBurger, setOpenBurger] = useState(false);
  window.addEventListener(
    "orientationchange",
    function () {
      window.location.reload(false);
    },
    false
  );
  const dispatch = useDispatch();
  const onBurgerClick = () => {
    setOpenBurger(!openBurger);
  };

  const onProfileClick = () => {
    dispatch(authActions.setAuth(false));
    delete window.localStorage.token;
    openNotification({
      title: "Вы успешно вышли из системы!",
      type: "success",
    });
  };
  return (
    <div className="panel">
      <div className="panel__sidebar">
        <Sidebar />
      </div>
      {openBurger && window.innerWidth <= 750 && (
        <div className="main-mobile__sidebar">
          <Sidebar />
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
      <div
        className={classNames("main", {
          "main--sidebar": openBurger,
        })}
      >
        <div className="main-topbar">
          <div className="main-topbar__account">
            <Badge
              onClick={onProfileClick}
              imgUrl="https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2019/04/suprised-man.jpg"
            />
          </div>
        </div>
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/projects" component={ProjectsPanel} />
            <Route path="/" component={EmptyPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
