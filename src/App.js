import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePg from "./pageContainer/homePg/HomePg";
import ProductPg from "./pageContainer/productPg/ProductPg";
import CartPg from "./pageContainer/cartPg/CartPg";
import WishListPg from "./pageContainer/wishlistPg/WishListPg";
import LoginPg from "./pageContainer/loginPg/LoginPg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/productPg" element={<ProductPg />} />
        <Route path="/cartPg" element={<CartPg />} />
        <Route path="/wishlistPg" element={<WishListPg />} />
        <Route path="/loginPg" element={<LoginPg/>}/>
      </Routes>
    </div>
  );
}

export default App;
