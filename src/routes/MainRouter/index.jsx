import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { ProjectsPanel, EmptyPage } from "../../pages";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/projects" component={ProjectsPanel} />
      <Route path="/" component={EmptyPage} />
    </Switch>
  );
};

export default MainRouter;
