import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute=({children})=>{
    let location=useLocation()
    
    let isAuth=useSelector((item)=>item.authReducer.isAuth)
    if(!isAuth){
        return <Navigate to="/login" state={location.pathname} replace={true}/>
    }

    return children
}


<div>
    <input type="email" id="one"/>
    <input type="name" id="two"/>
    <input type="password" id="three"/>
    <button>Submit</button>
</div>





