import { Get_product_success, Post_product_success, Product_failure, Product_request } from "../actionType"

let init={
    isError:false,
    isLoading:false,
    products:[],
    error:""
}

export let reducer=(state=init,{type,payload})=>{
    switch(type){
        case Product_request:{
            return {...state,isLoading:false}
        }
        case Product_failure:{
            return {...state,isError:true,error:payload}
        }
        case Get_product_success:{
            return {...state,isLoading:false,products:payload}
        }
        case Post_product_success:{
            return {...state}
        }

        case Get_product_success:{
            return {...state,isLoading:false,products:payload}
        }

        default:{
            return state
        }
    }


}