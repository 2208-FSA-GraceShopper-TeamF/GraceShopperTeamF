import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "../reducers/productSlice";
import { singleProductSlice } from "../components";
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    singleProductStore: singleProductSlice
  }
});

export default store;
