import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default  function PrivateRoute({children}) {
    let { login } = useSelector((state) => state.login)

    return login.isAuth ?  children : <Navigate to={"/login"}/>
	
}

