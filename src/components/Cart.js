import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector(cartSelect);

  return (
    <div className="cart-items">
      <table>
        <h2 className="cart-items-header">Cart items</h2>
        <tbody>
          {cartItems.map((items) => {
            return (
              <tr key={items.id}>
                <td>{items.name}</td>
                <td>
                  <img src={items.imageUrl} width="100px" height="100px" />
                </td>
                <td>{items.price}</td>
              </tr>
            );
          })}
          <button className="cart-buy-btn">Checkout</button>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
