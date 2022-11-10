import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect, removeFromCart } from "../reducers/cartSlice";

const Cart = () => {
    const cartItems = useSelector(cartSelect);

    const dispatch = useDispatch;

    const remove = (product) =>{
        console.log('removing:', product.id);
        cartItems.filter((item) => item.id !== product.id)
    };
    
    // function decreaseAmount(){
        
    // }
    return (
        <div className="cart-items">
            <table>
                <thead>
                    <tr>
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
                            return (
                                <tr key={items.id}>
                                    <td>{items.name}</td>
                                    <td><img src={items.imageUrl} width="100px" height="100px" /></td>
                                    <td>{items.price}</td>
                                    <td>
                                        {/* <button onClick={() => {
                                            if ({items.quantity} <= 1){
                                                disable button
                                            }    
                                        }}><</button> */}
                                        {/* {items.quantity} */}
                                        
                                        <input name="count" type='number' min='1' max={items.quantity} defaultValue='1'></input> {/**adjust to account for 0 item quantity */}
                                    </td>
                                    <td><button onClick={()=> {remove(items)}}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Cart;