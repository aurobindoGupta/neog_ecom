import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <FilterProvider>
      <App />
    </FilterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
