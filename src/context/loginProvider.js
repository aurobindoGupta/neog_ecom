import { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [isLoggegIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("userData"))?true:false);
  
  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    userData ? setIsLoggedIn(true) : setIsLoggedIn(false);
    console.log({userData});
  },[]);
console.log({isLoggegIn})
  return (
    <LoginContext.Provider value={[isLoggegIn, setIsLoggedIn]}>
      {children}
    </LoginContext.Provider>
  );
};
const useLoginContext = () => useContext(LoginContext);
export { useLoginContext, LoginProvider };
