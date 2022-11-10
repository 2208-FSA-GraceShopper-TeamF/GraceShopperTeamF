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
    // removeItem: (state, action) => {
    //     state.splice(action.payload, 1);
    // }
  },
});

export const cartSelect = (state) => {
    return state.cartStore
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
