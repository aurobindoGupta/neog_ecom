import "./App.css";

import HomePg from "./pageContainer/homePg/HomePg";
import { Routes, Route } from "react-router-dom";
import ProductPg from "./pageContainer/productPg/ProductPg";
import CartPg from "./pageContainer/cartPg/CartPg";
import WishListPg from "./pageContainer/wishlistPg/WishListPg";
import LoginPg from "./pageContainer/loginPg/LoginPg";
import Mockman from "mockman-js";
import SignUpPg from "./pageContainer/signUpPg/SignUpPg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/productPg" element={<ProductPg />} />
        <Route path="/cartPg" element={<CartPg />} />
        <Route path="/wishlistPg" element={<WishListPg />} />
        <Route path="/loginPg" element={<LoginPg />} />
        <Route path="/signUpPg" element={<SignUpPg />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
