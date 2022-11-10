import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];


const cartSlice = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    // removeFromCart: (state, action) => {
    //     const data = state.filter((item) => item.id !== action.payload)
    //     return data;
    // }
  },
});

export const cartSelect = (state) => {
    return state.cartStore
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
