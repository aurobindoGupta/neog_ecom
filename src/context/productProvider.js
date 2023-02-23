import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/products",
    }).then((response) => setProductData(response.data.products));
  }, []);

  return (
    <productContext.Provider value={[productData, setProductData]}>
      {children}
    </productContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(productContext);
};
export { ProductProvider, useProductContext };
