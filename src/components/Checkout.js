import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../reducers/cartSlice";

const Checkout = () => {
  const items = useSelector(cartSelect);

  const itemsPrice = items.map((item) => {
    return item.price * item.quantity;
  });
  const totalPriceRdc = itemsPrice.reduce((prev, curr) => prev + curr);

  return (
    <div className="checkout-cart">
      <h1>Checkout</h1>
      <div className="checkout-items">
        <ul>
          <h4>Items</h4>
          {items.map((cartItem) => {
            return (
              <li>
                <span>{cartItem.name}</span>
                <span> ${cartItem.price}</span>
                <span> x {cartItem.quantity}</span>
              </li>
            );
          })}
        </ul>
        <div className="checkout-total">
          <h3 className="checkout-total">Total: ${totalPriceRdc.toFixed(2)}</h3>
        </div>
      </div>
      <div>
        <form className="checkout-form">
          <label>
            <p> First Name:</p>
            <input className="checkout-form-input" type="text" name="name" />
          </label>

          <label>
            <p> Last Name:</p>
            <input className="checkout-form-input" type="text" name="name" />
          </label>
          <label>
            <p> Address:</p>
            <input className="checkout-form-input" type="text" name="name" />
          </label>
          <label>
            <p> Credit Card Number</p>
            <input className="checkout-form-input" type="text" name="name" />
          </label>
          <button className="completePurchasBtn">Complete Purchase</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
