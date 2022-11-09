import { configureStore } from "@reduxjs/toolkit";
import singleProductSlice from "../reducers/singleProductSlice";

const store = configureStore({
  reducer: {
    singleProductStore: singleProductSlice
  },
});

export default store;
