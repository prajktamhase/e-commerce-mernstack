import { useEffect, useState } from "react"
import axios from 'axios'
import "./UpdateProduct.css"
import { useParams } from "react-router-dom"

function UpdateProduct() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [productImage, setproductImage] = useState('')
    const [brand, setBrand] = useState('')

    const { id } = useParams();

    const loadProducts = async () => {
        const response = await axios.get(`/product/${id}`)
        const { name, description, price, productImage, brand } = response?.data?.data

        setName(name)
        setDescription(description)
        setPrice(price)
        setproductImage(productImage)
        setBrand(brand)
    }
    useEffect(()=>{
        loadProducts();
    },[])

    const updateProduct = async () => {
        if (!name || !description || !price || !productImage || !brand) {
            alert("All dields are required")
            return
        }
        const ProductData = {
            name,
            description,
            price,
            productImage,
            brand
        }
        const response = await axios.post('/commerces', ProductData);
        alert(response.data.message)

        setName('')
        setDescription('')
        setPrice('')
        setproductImage('')
        setBrand('')
    }

   
    return (<>
        <div className="producr-card">
            <h1 className="text"><b>Update Product</b></h1>
            <form>
                <input type="text"
                    className="form"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} /><br />

                <input type="text"
                    className="form"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                <br />

                <input type="text"
                    placeholder="Price"
                    className="form"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                <br />

                <input type="text"
                    placeholder="productImage"
                    className="form "
                    value={productImage}
                    onChange={(e) => {
                        setproductImage(e.target.value)
                    }} /><br />

                <input type="text"
                    placeholder="Brand"
                    className="form"
                    value={brand}
                    onChange={(e) => {
                        setBrand(e.target.value)
                    }} /><br />

                <button type="button"
                    className="form button-product"
                    onClick={updateProduct}
                >Add Product</button>
            </form>
        </div>
    </>
    )
}
export default UpdateProduct