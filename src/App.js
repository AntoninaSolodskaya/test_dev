import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Main from "./pages/main/Main";
import Table from "./pages/table/Table";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/table" component={Table} />
    </Switch>
  </Fragment>
);

export default App;
