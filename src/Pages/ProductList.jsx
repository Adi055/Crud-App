import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { GetProduct } from "../redux/ProductReducer/action"
import { useEffect } from "react"
import { ProductCard } from "./ProdutCard"
import {  styled } from "styled-components"
import { useSearchParams } from "react-router-dom"

const ProductList=()=>{
    let dispatch=useDispatch()
    let [search,Setsearch]=useSearchParams([])

    let {data,isLoading,isError}=useSelector((item)=>{
        return {
            data:item. ProductReducer.products,
            isLoading:item.ProductReducer.isLoading,
            isError:item.ProductReducer.isError
        }
    },shallowEqual)

    let paramObj={
        params:{
            gender:search.getAll("gender"),
            color:search.getAll("color"),
            brand:search.getAll("brand"),
            _sort:search.get("order") && "price",
            _order:search.get("order")
        }
    }

useEffect(()=>{
    dispatch(GetProduct(paramObj))
},[search])
    
    return (
        
            
            <DIV >
                {
                    data.map((ele)=>(
                        <ProductCard key={ele.id} {...ele} />
                    ))
                }
            </DIV>
       
    )
}
export default ProductList

const DIV=styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:20px;
    margin:10px;
`