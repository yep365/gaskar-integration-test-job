import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Auth } from "./pages";
import { MainRouter } from "./routes";

function App() {
  const { isAuth } = useSelector(({ auth }) => auth);

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route
          path="/"
          render={() => (isAuth ? <MainRouter /> : <Redirect to="/auth" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
