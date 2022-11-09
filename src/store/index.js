import { configureStore } from "@reduxjs/toolkit";
import { singleProductSlice } from "../reducers/singleProductSlice";
import { productSlice } from "../reducers/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    singleProductStore: singleProductSlice,
  },
});

export default store;
