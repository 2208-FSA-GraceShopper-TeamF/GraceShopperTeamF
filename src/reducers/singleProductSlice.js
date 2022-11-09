import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProduct: {},
};

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (productId) => {
    const { data } = await axios.get(`/api/products/${productId}`);
    return data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });
  },
});

export default singleProductSlice.reducer;
