import { createSlice, createAsyncThunk, createNextState } from "@reduxjs/toolkit";
import axios from "axios";

const initialState =  [];

export const logIn = createAsyncThunk('logIn', async ( credentials) => {
    try {
        const {data} = await axios.post('/api/users/login', credentials );
        console.log("log in data:",data);
        return data;

    } catch (error) {
        console.log('Bad Credentials!');
    }
});

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            console.log('log in',action.payload);
             state.push(action.payload);
        })
    },
});

export const currentUser = (state) => {
    return state.users;
}

export default userSlice.reducer;