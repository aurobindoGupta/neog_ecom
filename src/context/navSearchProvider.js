import { createContext, useContext, useState } from "react";

const NavSearchContext = createContext();
const NavSearchProvider = ({ children }) => {
  const [searchBarInput, setSearchBarInput] = useState("");

  return <NavSearchContext.Provider value={[searchBarInput, setSearchBarInput]}>{children}</NavSearchContext.Provider>;
};
const useNavSearchContext = () => useContext(NavSearchContext);
export { NavSearchProvider,useNavSearchContext };
