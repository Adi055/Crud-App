import {Routes,Route} from "react-router-dom"
import { Admin } from "./Admin"
import Login from "./Login"
import Home from "./Home"
import { PrivateRoute } from "../components/PrivateRoute"
import EditProduct from "./EditProduct"

export let AllRoutes=()=>{

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/edit/:id" element={<EditProduct/>}/>
            <Route/>
        </Routes>
    )
}