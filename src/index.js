import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter_Context";
import { CartProvider } from "./context/cartProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
