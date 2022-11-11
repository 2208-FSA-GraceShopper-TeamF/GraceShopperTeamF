import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../reducers/cartSlice";

const Checkout = () => {
    const items = useSelector(cartSelect);

    const itemsPrice = items.map((item) => {
        return item.price * item.quantity
    });
    const totalPriceRdc = itemsPrice.reduce((prev, curr) => prev + curr );

    return (
        <div className="checkout-cart">
            <ul className="checkout-items">
                {items.map((cartItem) => {
                    return (
                        <li>
                            {cartItem.name}
                            {cartItem.price}
                            {cartItem.quantity}
                        </li>
                    )
                })
                }
            </ul>
            <div className="checkout-total">
                <h3>Total: ${totalPriceRdc}</h3>
            </div>
        </div>
    )
}

export default Checkout;