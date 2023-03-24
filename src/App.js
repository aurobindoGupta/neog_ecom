import "./App.css";

import HomePg from "./pageContainer/homePg/HomePg";
import { Routes, Route } from "react-router-dom";
import ProductPg from "./pageContainer/productPg/ProductPg";
import CartPg from "./pageContainer/cartPg/CartPg";
import WishListPg from "./pageContainer/wishlistPg/WishListPg";
import LoginPg from "./pageContainer/loginPg/LoginPg";
import Mockman from "mockman-js";
import SignUpPg from "./pageContainer/signUpPg/SignUpPg";
import Protected from "./utils/Protected";
import { useLoginContext } from "./context/loginProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn] = useLoginContext();
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/productPg" element={<ProductPg />} />
        <Route
          path="/cartPg"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <CartPg />
            </Protected>
          }
        />
        <Route path="/wishlistPg" element={<WishListPg />} />
        <Route path="/loginPg" element={<LoginPg />} />
        <Route path="/signUpPg" element={<SignUpPg />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
