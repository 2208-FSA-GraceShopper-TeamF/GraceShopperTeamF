import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPeristedCart = createAsyncThunk(
  "getPersistedCart",
  async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const localCart = JSON.parse(localStorage.getItem("localCart"));

    if (user) {
      try {
        const { data } = await axios.get(`/api/users/${user.id}/cart`);

        return data.products || [];
      } catch (error) {
        return [];
      }
    } else {
      return localCart || [];
    }
  }
);

export const persistCart = async (cart) => {
  const user = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem("localCart", JSON.stringify(cart));

  if (user) {
    try {
      await axios.post(`/api/users/${user.id}/cart`, cart);
    } catch (error) {}
  }
};

const cartSlice = createSlice({
  name: "cartStore",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        let newItem = { ...action.payload };
        newItem.quantity = 1;
        state.push(newItem);
      }

      persistCart(state);

      return state;
    },
    updateCart: (state, action) => {
      const itemIndex = state.findIndex((p) => p.id === action.payload.id);

      state[itemIndex].quantity = action.payload.quantity;

      persistCart(state);

      return state;
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const cart = state.filter((item) => item.id !== product.id);

      state = cart;

      persistCart(state);

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeristedCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const cartSelect = (state) => {
  return state.cartStore;
};

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
