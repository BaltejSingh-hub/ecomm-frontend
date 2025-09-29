import Cookies from "js-cookie";
import { Navigate,Outlet } from "react-router-dom";


const ProtectedRoute=({statusCode,setStatusCode})=>{
    const isAuthenticated = Cookies.get("token");
   console.log("isAuthenticated",isAuthenticated) 
    console.log("INSIDE THE PROTECTED CODE for authenticated",isAuthenticated)
    console.log("INSIDE THE PROTECTED CODE",statusCode)

    return(
        <>
            {isAuthenticated && statusCode!==(401)?<Outlet/>:<Navigate to="/signup" replace/>}
        </>
    )
}

export default ProtectedRoute