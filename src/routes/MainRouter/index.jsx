import React from "react";
import { Route, Switch } from "react-router-dom";

import { Main } from "../../pages";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default MainRouter;
