import { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/authReducer/action"
import { useLocation, useNavigate } from "react-router-dom"


const Login=()=>{
    let dispatch=useDispatch()
    const [email,Setemail]=useState("")
    const [password,Setpassword]=useState("")
    let location=useLocation();
    let navigate=useNavigate()

    let {isAuth,isError}=useSelector((item)=>{
        return{
            isAuth:item.authReducer.isAuth,
            isError:item.authReducer.isError
        }
    },shallowEqual)

    const HandleSubmit=(e)=>{
        e.preventDefault()
        let userData={
            email,
            password
        }
        dispatch(login(userData)).then((res)=>{
            navigate(location.state, {replace:true})
        })
    }

    return (
        <DIV error={isError.toString()}>
            <h2>Login Page</h2>
            {isAuth && <p>Login Successful</p>}
            {isError && <p>Invalid credentials</p>}
            <form onSubmit={HandleSubmit}>
                <input type="email" value={email} placeholder="email" onChange={(e)=>Setemail(e.target.value)}/>
                <input type="password" value={password} placeholder="password" onChange={(e)=>Setpassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </DIV>
    )
}

export default Login

const DIV=styled.div`
width:320px;
height:230px;
margin:auto;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
position: relative;
top:90px;
   input{
    display:flex;
        justify-content:center;
        margin: 10px;
        height:1.8vw;
        width:20vw;
        margin-left:23px;
        margin-top:20px;
        border:${({error})=>(error==="true"?"1px solid red":null)}
   }
   button{
    height:1.9vw;
        width:20.5vw;
        margin-right:8px;
        color:white;
        background-color:blue;
        border:none;
   }


`