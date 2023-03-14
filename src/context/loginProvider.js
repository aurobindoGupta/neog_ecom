import { createContext, useContext, useState } from "react";

const LoginContext= createContext();
const LoginProvider=({children})=>{
    const[isLoggegIn, setIsLoggedIn]= useState();
    return(
        <LoginContext.Provider value={[isLoggegIn,setIsLoggedIn]}>{children}</LoginContext.Provider>
    )
}
const useLoginContext =()=> useContext(LoginContext);
export{useLoginContext,LoginProvider}