import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "materialize-css/dist/css/materialize.min.css";
import "jquery/dist/jquery";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
