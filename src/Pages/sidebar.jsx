import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { useSearchParams } from "react-router-dom";

const Sidebar=()=>{
    let [search,Setsearch]=useSearchParams([])
    const init=search.getAll("gender")
    let [gender,Setgender]=useState(init || []);
    const initstate=search.getAll("color")
    let [color,Setcolor]=useState(initstate||[]);
    const initbrand=search.getAll("brand")
    let [brand,setBrand]=useState(initbrand||[])
    const initOrder=search.get("order")
    let [order,Setorder]=useState(initOrder||"")
    
    const Handlegender=(e)=>{
        let {value}=e.target
        let newGender=[...gender];
         if(newGender.includes(value)){
            newGender=newGender.filter((ele)=>ele!==value)
         }
         else {
            newGender.push(value)
         }
         Setgender(newGender)
    }

    const HandleColor=(e)=>{
        let {value}=e.target
        let newColor=[...color];
        if(newColor.includes(value)){
            newColor=newColor.filter((ele)=>ele!==value)
        }
        else {
            newColor.push(value)
        }
        Setcolor(newColor)
    }

    let HandleBrand=(e)=>{
        let {value}=e.target
        let newBrand=[...brand];
        if(newBrand.includes(value)){
            newBrand=newBrand.filter((ele)=>ele!==value)
        }
        else {
            newBrand.push(value)
        }
        setBrand(newBrand)
    }

    let Handlesort=(e)=>{
        Setorder(e.target.value)
    }

    console.log(gender);

    useEffect(()=>{
        let params={
                gender,
                color,
                brand
        }

        order && (params.order=order)

        Setsearch(params)
    },[gender,color,brand,order])


    return (
        <DIV>
            <h4>Category</h4>
            <div>
                <input type="checkbox" value={"men"} onChange={Handlegender} checked={gender.includes("men")}/>
                <label>Men</label>
            </div>
            <div>
                <input type="checkbox" value={"women"} onChange={Handlegender} checked={gender.includes("women")}/>
                <label>Women</label>
            </div>
            <div>
                <input type="checkbox" value={"kids"} onChange={Handlegender} checked={gender.includes("kids")}/>
                <label>Kids</label>
            </div>
            <h4>Color</h4>
            <div>
                <input type="checkbox" value={"red"} onChange={HandleColor} checked={color.includes("red")}/>
                <label>Red</label>
            </div>
            <div>
                <input type="checkbox" value={"black"} onChange={HandleColor} checked={color.includes("black")}/>
                <label>Black</label>
            </div>
            <div>
                <input type="checkbox" value={"green"} onChange={HandleColor} checked={color.includes("green")}/>
                <label>Green</label>
            </div>
            <div>
                <input type="checkbox" value={"white"} onChange={HandleColor} checked={color.includes("white")}/>
                <label>White</label>
            </div>
            <h4>Brand</h4>
            <div>
                <input type="checkbox" value={"puma"} onChange={HandleBrand} checked={brand.includes("puma")}/>
                <label>Puma</label>
            </div>
            <div>
                <input type="checkbox" value={"nike"} onChange={HandleBrand} checked={brand.includes("nike")}/>
                <label>Nike</label>
            </div>
            <div>
                <input type="checkbox" value={"campus"} onChange={HandleBrand} checked={brand.includes("campus")}/>
                <label>Campus</label>
            </div>
            <h4>Sort by price</h4>
            <div onChange={Handlesort}>
                <input type="radio" name="order" value={'asc'} defaultChecked={initOrder=="asc"}/>
                <label htmlFor="">Low to High</label>
                <br />
                <br />
                <input type="radio" name="order" value={'desc'} defaultChecked={initOrder=="desc"}/>
                <label htmlFor="">High to Low</label>
            </div>
        </DIV>
    )
}
export default Sidebar

const DIV=styled.div`
    padding:0 20px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

`