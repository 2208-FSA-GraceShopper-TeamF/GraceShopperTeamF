import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice from "../reducers/singleProductSlice";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";
import UserSlice from "../reducers/UserSlice";
import adminSlice from "../reducers/adminSlice";
import userCartSlice from "../reducers/userCartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    user: UserSlice,
    singleProductStore: singleProductSlice,
    cartStore: cartSlice,
    adminSlice: adminSlice,
    userCart: userCartSlice,
  },
});

export default store;
