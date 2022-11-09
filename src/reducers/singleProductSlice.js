import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singleProduct: {},
};

export const fetchSingleProduct = createAsyncThunk("fetchSingleProduct", async (productId) => {
    try{
    const { data } = await axios.get(`/api/products/${productId}`)
    return data
    }
    catch(error){
        console.log("Error in /api/products/:id", error)
    }
});

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

export const selectSingle = (state) => {
  return state.singleProductStore.singleProduct
};

export default singleProductSlice.reducer;
