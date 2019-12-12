import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Main from "./pages/main/Main";
import Table from "./pages/table/Table";
import TestComponent from "./pages/test/TestComponent";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/table" component={Table} />
      <Route path="/test" component={TestComponent} />
    </Switch>
  </Fragment>
);

export default App;
