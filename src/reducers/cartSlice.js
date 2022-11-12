import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProductAsync = createAsyncThunk(
  "editProductAsync",
  async (id) => {
    try {
      const { data } = await axios.put("/api/products/:id");
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("Couldn't fetch Product!", err);
    }
  }
);

const initialState = [];

const cartSlice = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;

        console.log("item quantity", item.quantity);
      } else {
        let newItem = { ...action.payload };
        newItem.quantity = 1;
        state.push(newItem);
      }
    },
    updateCart: (state, action) => {
      const itemIndex = state.findIndex((p) => p.id === action.payload.id);
      state[itemIndex].quantity = action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      state = action.payload;
      console.log("state", state);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const cartSelect = (state) => {
  return state.cartStore;
};

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
