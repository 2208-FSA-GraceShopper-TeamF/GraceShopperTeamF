import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCart, deleteFromUserCart, selectUserCart } from "../reducers/userCartSlice";
import { Link } from "react-router-dom";

const UserCart = () => {
    const userCart = useSelector(selectUserCart);
    const [deleteId, setDeleteId] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserCart())
    }, []);

    async function handleRemove(event) {
        event.preventDefault()
        dispatchEvent(deleteFromUserCart(deleteId))
    };

    return (
        <div className="cart-items">
            <div>
                <div>
                    <h2 className="cart-items-header">User Cart Items</h2>
                    {userCart.map((items) => {
                        return (
                            <div className="cart-items-row" key={items.id}>
                                <h3 className="cart-item-cell">{items.name}</h3>
                                <h3>
                                    <img className="cart-item-cell" src={items.imageUrl} />
                                </h3>
                                <h3 className="cart-item-cell">{items.price}</h3>
                                <h3 className="cart-item-cell">
                                    <input
                                        id={items.id}
                                        name="count"
                                        type="number"
                                        min="0"
                                        max={items.inventory}
                                        defaultValue={items.quantity}
                                        onChange={(e) => handleChange(e, items.id)}
                                    ></input>
                                </h3>
                                <form onSubmit={handleRemove}>
                                    <button
                                        type="submit"
                                        onClick={() => { setDeleteId(items.id) }}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        );
                    })}
                    <div className="cart-btns">
                        <Link to="/products">
                            <button className="cart-btn">Continue Shopping</button>
                        </Link>
                        <Link to="/checkout">
                            <button className="cart-btn">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserCart;