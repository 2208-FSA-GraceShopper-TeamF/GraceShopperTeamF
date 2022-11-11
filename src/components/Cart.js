import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect, removeFromCart } from "../reducers/cartSlice";

const Cart = () => {
  let cartItems = useSelector(cartSelect);

  const dispatch = useDispatch();

  const remove = (product) => {
    console.log("removing:", product.id);
    const data = cartItems.filter((item) => item.id !== product.id);
    console.log("new cart:", data);

    dispatch(removeFromCart(data));
  };

  // function decreaseAmount(){

  // }
  return (
    <div className="cart-items">
      <table>
        <tbody>
          <h2 className="cart-items-header">Cart Items</h2>

          {cartItems.map((items) => {
            return (
              <tr key={items.id}>
                <td>{items.name}</td>
                <td>
                  <img src={items.imageUrl} width="100px" height="100px" />
                </td>
                <td>{items.price}</td>
                <td>
                  {/* <button onClick={() => {
                                            if ({items.quantity} <= 1){
                                                disable button
                                            }    
                                        }}><</button> */}
                  {/* {items.quantity} */}
                  <input
                    name="count"
                    type="number"
                    min="0"
                    max={items.inventory}
                    defaultValue = {items.quantity}
                  ></input>{" "}
                  {/**adjust to account for 0 item quantity */}
                </td>
                <td>
                  <button
                    onClick={() => {
                      remove(items);
                    }}
                  >
                    X
                  </button>
                </td>
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
