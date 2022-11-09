import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    // removeItem: (state, action) => {
    //     state.splice(action.payload, 1);
    // }
  },
});

export const cartSelect = (state) => {
    return state.products.products

};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
