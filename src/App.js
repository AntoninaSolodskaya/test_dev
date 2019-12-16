import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main/Main";
import Table from "./pages/Table/Table";
import SimpleMenu from "./pages/SimpleMenu";
import TodoList from "./pages/TodoList";
import Form from "./pages/TodoList/Form";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/table" component={Table} />
      <Route path="/menu" component={SimpleMenu} />
      <Route path="/todo" component={TodoList} />
      <Route path="/form" component={Form} />
      <Route path="/form/:id" component={Form} />
    </Switch>
  </Fragment>
);

export default App;
