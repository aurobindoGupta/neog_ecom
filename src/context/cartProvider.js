import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cartValue, setCartValue] = useState([]);
    
    return <CartContext.Provider value={[cartValue, setCartValue]}>{children}</CartContext.Provider>;
};
const useCartContext=()=> useContext(CartContext);
export { useCartContext, CartProvider };
