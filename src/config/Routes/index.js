import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainApp, Login, Register } from "../../pages/Index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
