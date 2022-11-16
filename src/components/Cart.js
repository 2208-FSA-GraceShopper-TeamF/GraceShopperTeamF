import React, { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect, removeFromCart, updateCart } from "../reducers/cartSlice";

const Cart = () => {
  let localItems = window.localStorage.getItem('localCart')
  localItems = JSON.parse(localItems);

  console.log('LOCAL CART',localItems);

  let cartItems = localItems? localItems : useSelector(cartSelect);

  const dispatch = useDispatch();
  // const id = useParams;

  const handleChange = (e, id) => {
    dispatch(updateCart({ quantity: e.target.value, id }));
  };

  const remove = (product) => {
    console.log("removing:", product.id);
    const data = cartItems.filter((item) => item.id !== product.id);
    console.log("new cart:", data);
    dispatch(removeFromCart(data));
  };

  return (
    <div className="cart-items">
      <div>
        <div>
          <h2 className="cart-items-header">Cart Items</h2>

          {cartItems.map((items) => {
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
                  {/**adjust to account for 0 item quantity */}
                </h3>
                <h3>
                  <button
                    onClick={() => {
                      remove(items);
                    }}
                  >
                    X
                  </button>
                </h3>
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
    </div>
  );
};

export default Cart;
