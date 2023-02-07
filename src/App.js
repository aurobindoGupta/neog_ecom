import "./App.css";

import HomePg from "./pageContainer/homePg/HomePg";
import { Routes, Route } from "react-router-dom";
import CartPg from "./pageContainer/cartPg/CartPg";
import WishListPg from "./pageContainer/wishlistPg/WishListPg";
import ProductPg from "./pageContainer/productPg/ProductPg";
import LoginPg from "./pageContainer/loginPg/LoginPg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/productPg" element={<ProductPg />} />
        <Route path="/cartPg" element={<CartPg />} />
        <Route path="/wishlistPg" element={<WishListPg />} />
        <Route path="/loginPg" element={<LoginPg />} />
      </Routes>
    </div>
  );
}

export default App;
