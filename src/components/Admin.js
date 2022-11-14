import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, fetchProducts } from "../reducers/productSlice";
import { addProduct, deleteProduct } from "../reducers/adminSlice";

const Admin = () => {
    const products = useSelector(selectProducts);
    // const adminProducts = useSelector((state) => { return state.adminProducts })

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [inventory, setInventory] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        dispatch(addProduct({ name, color, price, size, description, inventory, imageUrl }))
    }

    async function handleDelete(product) {
        window.location.reload(false)
        dispatch(deleteProduct(product))
    }

    return (
        <div className="admin-edit-product">
            <div className="products">
                <h2>All Products</h2>
            </div>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        <img className="all-products-img" src={product.imageUrl} />
                        <h2>
                            {product.size} - ${product.price}
                        </h2>
                        <Link key={product.id} to={'/admin'}>
                            <button className="deleteBtn" type="button" onClick={() => handleDelete(product.id)}>
                                Delete Product
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor='color'>Color</label>
                <input
                    name="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                />

                <label htmlFor='price'>Price</label>
                <input
                    name="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />

                <label htmlFor='size'>Size</label>
                <input
                    name="size"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                />

                <label htmlFor='description'>Description</label>
                <input
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <label htmlFor='inventory'>Inventory Amount</label>
                <input
                    name="inventory"
                    value={inventory}
                    onChange={(event) => setInventory(event.target.value)}
                />

                <label htmlFor='imageUrl'>Image Url</label>
                <input
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                />

                <button className="submitProductBtn" type="submit">
                    Add Product
                </button>

                <button className="clearBtn" type="button" onClick={() => {
                    setName(''),
                        setColor(''),
                        setPrice(''),
                        setSize(''),
                        setDescription(''),
                        setInventory(''),
                        setImageUrl('')
                }}>
                    Clear
                </button>
            </form>
        </div>
    )
}

export default Admin