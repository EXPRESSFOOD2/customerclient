/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import axios from "axios";

const { VITE_APIURLOCAL, VITE_URLDEPLOY } = import.meta.env;
axios.defaults.baseURL = VITE_APIURLOCAL || VITE_URLDEPLOY;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
