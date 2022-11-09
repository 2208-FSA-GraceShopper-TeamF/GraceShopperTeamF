import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../reducers/cartSlice";

const Cart = () => {
    const cartItems = useSelector(cartSelect);

    return (
        <div className="cart-items">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    {/* <th>Total Price</th> */}
                </tr>
            </thead>
            <tbody>
               {
                cartItems.map((items) => {
                    return(
                        <tr>
                        <td>{items.name}</td>
                        <td><img src={items.imageUrl} width="100px" height="100px"/></td>
                        <td>{items.price}</td>
                        <td>{items.quantity}</td>
                        </tr>
                    )
                })
               }
            </tbody>
        </div>
    )
};

export default Cart;