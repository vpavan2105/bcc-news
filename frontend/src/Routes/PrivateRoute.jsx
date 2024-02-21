import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({children}) {
    let { login } = useSelector((state) => state.login)

    return login.isAuth ?  children : <Navigate to={"/login"}/>
	
}

export default PrivateRoute;
