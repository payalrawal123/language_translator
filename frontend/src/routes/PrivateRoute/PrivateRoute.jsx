import { useContext } from "react"
import { UserContext } from "../../ContextApi/UserContext"
import { Navigate, useNavigate } from "react-router-dom";


export const PrivateRoute = ({children}) =>{
const {user, setUser,isLogedIn,setIsLogedIn} = useContext(UserContext);
const navigate = useNavigate();
if(!isLogedIn){
return <Navigate to="/login"/>
}
return children;
}