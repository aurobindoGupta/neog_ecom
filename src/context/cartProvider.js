import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).cart
      : []
  );

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      userData.cart = cartValue;
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [cartValue]);

  return (
    <CartContext.Provider value={[cartValue, setCartValue]}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => useContext(CartContext);
export { useCartContext, CartProvider };
