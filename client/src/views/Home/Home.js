import axios from "axios"
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {

    const [product, setProduct] = useState([])

const loadProduct = async()=>{

    const response = await axios.get('/website')
    setProduct(response?.data?.data)

}
useEffect(()=>{
    loadProduct();
}, [])

    return (
        <>
            <div>

                {
                    product.map((productInfo) => {
                        const { name, description, price, imageURI,brand } = productInfo;
                        return
                        <div>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <p>{price}</p>
                        <img src={imageURI}/>
                        <p>{brand}</p>

                        </div>
                    })
                }
            </div>
        </>
    )

}
export default Home