import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/index.js";
import { Container } from "./containers/Items.js"


render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
)
