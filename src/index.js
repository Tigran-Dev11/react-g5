import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./providers/global-provider";
import { ProductProvider } from "./providers/product-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </GlobalProvider>
  </BrowserRouter>
);
