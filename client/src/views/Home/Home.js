import axios from "axios"
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await axios.get('/products')

        setProducts(response?.data?.data)
        console.log(response?.data?.data)
    }
    useEffect(() => {
        loadProducts();
    }, [])

    const deleteProduct = async (_id) => {
        const response = await axios.delete(`product/${_id}`)
        if (response?.data?.success) {
            loadProducts();
        }
    }
    return (
        <>
            <div className="bg-color">
                <div className="flex-card">
                    {
                        products?.map((productInfo, index) => {
                            const { _id, name, description, price, productImage, brand } = productInfo;
                            return (
                                <div key={index}
                                    className="card-product">
                                    <img src={productImage}
                                        className="img-product" />

                                    <h1 className="center">{name}</h1>
                                    <p className="center">{description}</p>
                                    <p className="center">{price}</p>
                                    <p className="center">{brand}</p>

                                    <a href={`/details/${_id}`} target="_blank"
                                        className="view-button">View More</a>

                                    <button type="button"
                                        className="delete-button-product"
                                        onClick={() => {
                                            deleteProduct(_id)
                                        }}>
                                        ❌</button>

                                    <a href={`/updateproduct/${_id}`} target="_blank"
                                        className="update-button-product">✏️</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )}
export default Home;