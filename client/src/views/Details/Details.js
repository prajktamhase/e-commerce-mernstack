import axios from "axios";
import "./Details.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails(){
    const[detail,setDetail]=useState({})
    const loadDetails=async()=>{
        const response=await axios.get(`/website/${id}`)
        setDetail(response?.data?.data)
    }

    const {_id}=useParams()
    useEffect(()=>{
        loadDetails
    },[])

    return(
        <>
        <div>
            <h1>Product Details</h1>
            <h3>Name:{detail?.name}</h3>
            <p>description:{detail?.description}</p>
            <h3>Price:{detail?.price}</h3>
            <h3>ProductImage:{detail?.productImage}</h3>
            <h3>Brand:{detail?.brand}</h3>
        </div>
        </>
    )
}
export default ProductDetails