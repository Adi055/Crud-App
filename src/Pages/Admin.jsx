import { useState } from 'react'
import styled from 'styled-components'
import { PostData } from '../redux/ProductReducer/action'
import {useDispatch,useSelector,shallowEqual} from "react-redux"

let init={
    name:"",
    image:"",
    brand:"",
    price:"",
    gender:"",
    category:"",
    color:""
}

export const Admin=()=>{
    let [val,Setval]=useState(init)
    let dispatch=useDispatch()

    let {isLoading,isError}=useSelector((item)=>{
        return {
            isError:item. ProductReducer.isError,
            isLoading:item.ProductReducer.isLoading
        }
    },shallowEqual)

    let handleChange=(e)=>{
        let {name,value}=e.target
        Setval({...val,[name]:name==="price"?+value:value})
    }

    let HandleSubmit=(e)=>{
        e.preventDefault()
        dispatch(PostData(val))
        Setval(init)
    }

    return (
        <DIV>
            {isLoading && <p>Loading..</p>}
            <form action="" onSubmit={HandleSubmit}>
            <h2>Add Product</h2>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="image" name="image" onChange={handleChange}/>
            <input type="text" placeholder="brand" name="brand" onChange={handleChange}/>
            <input type="number" placeholder="price" name="price" onChange={handleChange}/>
            <select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
            <select name="category" onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="top waer">Top Wear</option>
                <option value="bottom wear">Bottom Wear</option>
                <option value="foot wear">Foot Wear</option>
            </select>
            <select name="color" onChange={handleChange}>
                <option value="">Select color</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="black">Black</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </DIV>
    )

}

const DIV=styled.div`
width:320px;
height:400px;
margin:auto;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

h1{
    
}

    input{
        display:flex;
        justify-content:center;
        margin: 10px;
        height:1.8vw;
        width:20vw;
        margin-left:23px;
        margin-top:15px;
    }
   select{
    display:block;
    margin: 10px;
    height:2vw;
    width:20.6vw;
    margin-left:23px;
    margin-top:15px;
   }

   button{
    
   }

`



