import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, fetchProducts } from "../reducers/productSlice";

//import all neccesary thunks!

const AllProducts = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  // ** Loads thunk after page loads once, input your thunk! **/
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  /**handle delete fn */
  const add2Cart = async (product) => {
    dispatch(/**add thunk */);
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
            <img src={product.imageUrl} />
            <h2>
              {product.size} - ${product.price}
            </h2>
            <button id={product.id} onClick={add2Cart(product)}>
              +
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
