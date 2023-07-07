import { styled } from "styled-components"
import ProductList from "./ProductList"
import Sidebar from "./sidebar"


const Home=()=>{
    
    return (
        
            
            <DIV >
                <div className="sidebar">
                <Sidebar/>
                </div>
                <div className="product">
               <ProductList/>
               </div>
            </DIV>
       
    )
}
export default Home

const DIV=styled.div`
    display:flex;
    .sidebar{
        width:21%;
        position:relative;
        top:42px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        
    }
    .product{
        width:85%;
        position:relative;
        top:32px
    }
`

