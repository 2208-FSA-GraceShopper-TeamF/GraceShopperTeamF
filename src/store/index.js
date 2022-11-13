import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice from "../reducers/singleProductSlice";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";
import UserSlice from "../reducers/UserSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    users: UserSlice,
    singleProductStore: singleProductSlice,
    cartStore: cartSlice,
  },
});

export default store;
