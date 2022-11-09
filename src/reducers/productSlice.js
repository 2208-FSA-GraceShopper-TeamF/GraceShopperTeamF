import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Thunk to fetch all
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (error) {
    console.log("Couldn't fetch products!", err);
  }
});

const initialState = { products: [] };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return { products: action.payload };
    });
  },
});

export const selectProducts = (state) => {
  return state.products.products;
};

export default productSlice.reducer;
