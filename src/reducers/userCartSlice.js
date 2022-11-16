import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserCart = createAsyncThunk("fetchUserCart", async () => {
    const { data } = await axios.get("/api/:userId/:cartId");
    return data;
});

export const addToUserCart = createAsyncThunk("addToUserCart", async (payload) => {
    const { data } = await axios.post("/api/:userId/:cartId", payload);
    return data;
});

export const deleteFromUserCart = createAsyncThunk("deleteFromUserCart", async (deleteId) => {
    const { data } = await axios.delete(`/api/:userId/:cartId/${deleteId}`);
    return data;
});

const initialState = {
    userCart: []
};

const userCartSlice = createSlice({
    name: "userCart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserCart.fulfilled, (state, action) => {
            state.userCart = action.payload;
        });
        builder.addCase(addToUserCart.fulfilled, (state, action) => {
            const item = state.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity++;
                console.log("item quantity", item.quantity);
            } else {
                let newItem = { ...action.payload };
                newItem.quantity = 1;
                state.push(newItem);
            }
        });
        builder.addCase(deleteFromUserCart.fulfilled, (state, action) => {
            function findProductIndex(currentProduct) {
                return currentProduct.id === action.payload
            }
            const deleteIdx = state.userCart.findIndex(findProductIndex)
            state.userCart.splice(deleteIdx, 1);
        });
    }
});

export const selectUserCart = (state) => {
    return state.userCart.userCart;
}

export default userCartSlice.reducer;