import axios from "axios"
import { Login_Failure, Login_Request, Login_Success } from "../actionType"

export const login=(obj)=>(dispatch)=>{
    dispatch(RequestAction())
    return axios.post("https://reqres.in/api/login",obj)
    .then((res)=>{
        dispatch(RequestSuccess(res.data.token))
    })
    .catch((err)=>{
        dispatch(RequestFailure(err.messege))
    })
}

export let RequestAction=()=>{
    return {type:Login_Request}
}

export let RequestFailure=()=>{
return {type:Login_Failure}
}

export let RequestSuccess=(payload)=>{
return {type:Login_Success,payload}
}