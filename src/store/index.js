import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  
    singleProductStore: singleProductSlice
  },
});

export default store;
