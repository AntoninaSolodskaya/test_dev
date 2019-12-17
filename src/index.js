import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { history } from "./@common/utils/history";
import { configureStore } from "./@store/configureStore";

import App from "./App";

import "./styles.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
