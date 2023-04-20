import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistValue, setWishlistValue] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")).wishlist
      : []
  );
  console.log(wishlistValue);


  useEffect(() => {
    if (localStorage.getItem("userData")) {
      let userData = JSON.parse(localStorage.getItem("userData"));
      const tempData = userData.wishlist.filter((item) => item !== null);
      userData.wishlist = tempData;
      console.log(tempData);
      localStorage.setItem("userData", JSON.stringify(userData));
      setWishlistValue(userData.wishlist);
    }
  }, []);
  useEffect(() => {
    if(localStorage.getItem("userData")){
      const userData = JSON.parse(localStorage.getItem("userData"));
      userData.wishlist = wishlistValue;
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [wishlistValue])
  


  return (
    <WishlistContext.Provider value={[wishlistValue, setWishlistValue]}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlistContext = () => useContext(WishlistContext);
export { useWishlistContext, WishlistProvider };
