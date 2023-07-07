import axios from "axios"
import { Get_product_success, Post_product_success, Product_failure, Product_request } from "../actionType"

export let PostData=(obj)=>(dispatch)=>{
    dispatch(ActionRequest())
    axios.post("http://localhost:8080/products",obj)
    .then((res)=>{
        dispatch(PostSuccess())
    })
    .catch((err)=>{
        dispatch(ActionError(err.messege))
    })

}

export const GetProduct=(obj)=>(dispatch)=>{
    dispatch(ActionRequest())
    axios.get("http://localhost:8080/products",obj)
    .then((res)=>{
        dispatch(GetSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(ActionError(err.messege))
    })

}

export const ActionRequest=()=>{
    return {type:Product_request}
}

export const ActionError=(payload)=>{
    return {type:Product_failure,payload}
}

export const PostSuccess=()=>{
    return {type:Post_product_success}
}

export const GetSuccess=(payload)=>{
return {type:Get_product_success,payload}
}

