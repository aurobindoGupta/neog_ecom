import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const categoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/categories",
    }).then((response) => setCategoryData(response.data.categories));
    console.log('Category data called');
  }, []);


  return (
    <categoryContext.Provider value={[categoryData, setCategoryData]}>
      {children}
    </categoryContext.Provider>
  );
};
const useCategoryContext = () => useContext(categoryContext);
export { CategoryProvider, useCategoryContext };
