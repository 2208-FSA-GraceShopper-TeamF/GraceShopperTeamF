import React, { useEffect } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  selectSingle,
} from "../reducers/singleProductSlice";

const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(selectSingle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return (
    <div className="singleProduct">
      <img src={product.imageUrl} className="singleProductImg" />
      <h1>Name: {product.name}</h1>
      <h2>Price: {product.price}</h2>
      <h2>Color: {product.color}</h2>
      <h3>Quantity: {product.quantity}</h3>
      <p>Description: {product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
