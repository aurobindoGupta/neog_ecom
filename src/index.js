import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filterProvider";
import { CartProvider } from "./context/cartProvider";
import { ProductProvider } from "./context/productProvider";
import { CategoryProvider } from "./context/categoryProvider";
import { WishlistProvider } from "./context/wishlistProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <CategoryProvider>
        <FilterProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </FilterProvider>
      </CategoryProvider>
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
