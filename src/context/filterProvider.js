import { createContext, useContext } from "react";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
