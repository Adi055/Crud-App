import { Login_Failure, Login_Request, Login_Success } from "../actionType"


let init={
    token:"",
    isAuth:false,
    isLoading:false,
    isError:false
}

export const reducer=(state=init,{type,payload})=>{
    switch(type){

        case Login_Request:{
            return {...state,isLoading:true}
        }

        case Login_Failure:{
            return {...state,isError:true}
        }

        case Login_Success:{
            return {...state,isAuth:true,isLoading:false,token:payload}
        }

        default:{
            return state
        }
    }

}
