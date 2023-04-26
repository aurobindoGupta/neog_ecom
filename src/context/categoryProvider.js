import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/categories",
    }).then((response) => setResponseData(response.data.categories));
    console.log("Category data called");
  }, []);

  useEffect(() => {
    const categoryFilterDummy = [];
    for (let i = 0; i < responseData.length; i++) {
      if (
        responseData[i].categoryName !==
        (responseData[i + 1] ? responseData[i + 1].categoryName : null)
      ) {
        responseData[i]["checked"] = false;
        categoryFilterDummy.push({
          ...responseData[i],
          checked: responseData[i].checked,
        });
      }
    }
    handleSetCategoryData(categoryFilterDummy);
  }, [responseData]);

  const handleSetCategoryData = (data) => {
    if (data.length > 0) {
      setCategoryData(data);
    }
  };

  return (
    <categoryContext.Provider value={[categoryData, setCategoryData]}>
      {children}
    </categoryContext.Provider>
  );
};
const useCategoryContext = () => useContext(categoryContext);
export { CategoryProvider, useCategoryContext };
