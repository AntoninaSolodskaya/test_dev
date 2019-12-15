import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Main from "./pages/Main/Main";
import Table from "./pages/Table/Table";
import SimpleMenu from "./pages/SimpleMenu";
import TodoList from "./pages/TodoList";
import TestComponent from "./pages/test/TestComponent";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/table" component={Table} />
      <Route path="/menu" component={SimpleMenu} />
      <Route path="/todo" component={TodoList} />
      <Route path="/test" component={TestComponent} />
    </Switch>
  </Fragment>
);

export default App;
