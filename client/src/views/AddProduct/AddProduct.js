import { useState } from "react"
import axios from 'axios'
import "./AddProduct.css"

function AddProduct() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageURI, setImageURI] = useState('')
    const [brand, setBrand] = useState('')

    const addProduct = async () => {
        if (!name || !description || !price || !imageURI || !brand) {
            alert("All dields are required")
            return
        }


        const ProductData = {
            name,
            description,
            price,
            imageURI,
            brand
        }


        const response = await axios.post('/commerces', ProductData);
        alert(response.data.message)

        setName('')
        setDescription('')
        setPrice('')
        setImageURI('')
        setBrand('')


    }
    return (<>


        <div className="producr-card">
            <h1 className="text"><b>Add Product</b></h1>
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
                    placeholder="ImageURI"
                    className="form"
                    value={imageURI}
                    onChange={(e) => {
                        setImageURI(e.target.value)
                    }} /><br />

                <input type="text"
                    placeholder="Brande"
                    className="form"
                    value={brand}
                    onChange={(e) => {
                        setBrand(e.target.value)
                    }} /><br />

                <button type="button"
                    className="form button-product"
                    onClick={addProduct}
                >Add Product</button>
            </form>
        </div>
    </>
    )

}
export default AddProduct