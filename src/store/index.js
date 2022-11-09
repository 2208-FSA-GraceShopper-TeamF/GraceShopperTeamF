import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice from "../reducers/singleProductSlice";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    singleProductStore: singleProductSlice,
    cartStore: cartSlice,
  },
});

export default store;
