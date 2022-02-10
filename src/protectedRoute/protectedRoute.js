import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {
    var isAuth;
    if(localStorage.getItem('token')){
        isAuth= true
    }
    else{
        isAuth= false
    }
  return isAuth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;