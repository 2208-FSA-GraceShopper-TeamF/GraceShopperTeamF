import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products: [],
    product: {}
}

export const addProduct = createAsyncThunk('addProduct', async (payload) => {
    const { data } = await axios.post('/api/products', payload)
    return data
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id) => {
    const { data } = await axios.delete(`/api/products/${id}`)
    return data
})

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const newState = state.products.filter((product) => product.id !== action.payload)
            return newState
        })
    }
})


export default adminSlice.reducer