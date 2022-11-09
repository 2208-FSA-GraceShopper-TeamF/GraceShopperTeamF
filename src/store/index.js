import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../reducers/productSlice";
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
