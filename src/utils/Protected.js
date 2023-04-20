import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/loginProvider";


const Protected = () => {
  const [isLoggedIn, setIsLoggedIn] = useLoginContext();
 
  if (isLoggedIn) {
    return <Outlet/>
  } else return <Navigate to="/loginPg" replace />;
  
};
export default Protected;
