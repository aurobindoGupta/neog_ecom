import { Navigate } from "react-router-dom";

const Protected = (props) => {
  if (props.isLoggedIn) {
    return props.children;
  }
  else return <Navigate to='/loginPg' replace/>;
};
export default Protected;
