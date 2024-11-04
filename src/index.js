import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./providers/global-provider";
import { Provider } from "react-redux";
import store from "./libs/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </BrowserRouter>
);
