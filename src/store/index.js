import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice from "../reducers/singleProductSlice";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";
import UserSlice from "../reducers/UserSlice";
import adminSlice from "../reducers/adminSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    user: UserSlice,
    singleProductStore: singleProductSlice,
    cartStore: cartSlice,
    adminSlice: adminSlice
  },
});

export default store;
