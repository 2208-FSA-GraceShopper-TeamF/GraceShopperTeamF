import { createSlice, createAsyncThunk, createNextState } from "@reduxjs/toolkit";
import axios from "axios";

let initialState ={};

export const logIn = createAsyncThunk('logIn', async ( credentials) => {
    try {
        const {data} = await axios.post('/api/users/login', credentials );
        console.log("return data from log in :",data);
        return data;

    } catch (error) {
        console.log('Bad Credentials!');
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, {payload}) => {
             state.user = payload;
        })
    },
});

export const currentUser = (state) => {
    
    return state.user.user;
}

export default userSlice.reducer;