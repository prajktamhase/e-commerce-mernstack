import axios from "axios"
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await axios.get('/website')

        setProducts(response?.data?.data)
        console.log(response?.data?.data)
    }

    const deleteProduct=async(id)=>{
        alert(id)
    }

        useEffect(() => {
            loadProducts();
        }, [])

        return (
            <>
                <h1>All Product</h1>
                <div className="flex-card">
                    {
                        products?.map((productInfo, index) => {
                            const { _id,name, description, price, productImage, brand } = productInfo;
                            return (
                                <div key={index} 
                                className="card-product">
                                    <img src={productImage} 
                                   className="img-product"/>
                                    
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    <p>{price}</p>                                   
                                    <p>{brand}</p>
                                   <a href={`/details/${id}`}target="_blank"
                                   className="view button">View More</a>

                                   <button type="button" className="view button"
                                   onClick={()=>{
                                    deleteProduct(_id)
                                    }}>
                                    Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )

    }

    export default Home;