import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default  function PrivateRoute({children}) {
    let isAuth = useSelector((state) => state.login)

    return isAuth ?  children : <Navigate to={"/login"}/>
	
}

