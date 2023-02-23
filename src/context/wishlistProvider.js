import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistValue, setWishlistValue]= useState([]);
  return <WishlistContext.Provider value={[wishlistValue,setWishlistValue]}>{children}</WishlistContext.Provider>;
};
const useWishlistContext = () => useContext(WishlistContext);
export { useWishlistContext, WishlistProvider };
