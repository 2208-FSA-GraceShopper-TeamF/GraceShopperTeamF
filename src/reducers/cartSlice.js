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
    removeFromCart: (state, action) => {
      console.log(state);
      console.log('action.payload', action.payload);
      // const data = state.filter((item) => {
      //   console.log(item.id);
      //   item.id !== action.payload
      //   console.log('action.payload.id', action.payload.id);
      //   console.log('data:', data);
      //   state = data;
      //   return state;
      // });
        state = action.payload;
        console.log('state', state);
        return state;
    }
  },
});

export const cartSelect = (state) => {
    return state.cartStore
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
