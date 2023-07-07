import styled from "styled-components"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const ProductCard=({name,image,brand,price,gender,category,color,id})=>{
    let isAuth=useSelector((item)=>item.authReducer.isAuth)

    return (
        <DIV>
            <img src={image}/>
            <h2>Name - {name}</h2>
            <p>Brand - {brand}</p>
            <p>Price - ₹{price}</p>
            {/* <p>Gender - {gender}</p>
            <p>Category - {category}</p>
            <p>Color - {color}</p> */}
            
            {
                isAuth && (
                    <div>
                        <button><Link to={`/edit/${id}`} style={{color:"white",textDecoration:"none"}}>Edit</Link></button>
           
            <button>Delete</button>
            </div>
                )
            }
           
        </DIV>
    )
}

const DIV=styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
border-radius:0.4em;

img{
    width:100%;
    height:50%;
}
button{
    position:relative;
    color:white;
    background-color:blue;
    height:2.5vw;
    width:5vw;
    border-radius:1em;
    border:none;
    cursor: pointer;
   top:7px;
   margin-right:5px;
}
`
