import React, { useState } from "react";
import classNames from "classnames";
import { Route, Switch } from "react-router-dom";

import { ResponsiveSidebar, Header } from "../../components";
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

  return (
    <div className="panel">
      <ResponsiveSidebar
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
      />
      <div
        className={classNames("main", {
          "main--sidebar": openBurger,
        })}
      >
        <Header />
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
