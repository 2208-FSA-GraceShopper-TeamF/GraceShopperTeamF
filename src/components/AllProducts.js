import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, fetchProducts } from "../reducers/productSlice";
import { addToCart } from "../reducers/cartSlice";
import { cartSelect } from "../reducers/cartSlice";

//import all neccesary thunks!

const AllProducts = () => {
  const products = useSelector(selectProducts);
  const cart = useSelector(cartSelect);

  const dispatch = useDispatch();

  // ** Loads thunk after page loads once, input your thunk! **/
  useEffect(() => {
    dispatch(fetchProducts());
    // window.localStorage.setItem('localCart', JSON.stringify(cart));
  }, []);

  const add2Cart = (product) => {
    console.log("adding:", product.name, "to cart:", cart);
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="products">
        <h2>All Products</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <img className="all-products-img" src={product.imageUrl} />
            <h2>
              {product.size} ${product.price}
            </h2>
            <button
              className="add-to-cart-btn"
              id={product.id}
              onClick={() => {
                add2Cart(product);

                // let localProduct = {...product} //copy of product

                // let localCart = [JSON.parse(window.localStorage.getItem('localCart'))];

                // if(localCart){
                //   let localDouble = localCart.find((product) => product.id === localProduct.id)
                //   if (localDouble) {
                //     localProduct.quantity++
                //   } else {
                //   localProduct.quantity = 1;
                //   console.log('UPDATED LOCAL CART',);
                //   }
                // }

                // window.localStorage.setItem('localCart', JSON.stringify(cart));
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
