import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import reducer from "./components/store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(reducer,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
