import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {};

export const logIn = createAsyncThunk("logIn", async (credentials) => {
  try {
    const { data } = await axios.post("/api/users/login", credentials);
    console.log("return data from log in :", { data });

    return data;
  } catch (error) {
    console.log("Bad Credentials!");
  }
});

export const signUp = createAsyncThunk("signUp", async (newCredentials) => {
  try {
    const { data } = await axios.post("/api/users/signup", newCredentials);
    console.log("created:", data);
    // thunkAPI.dispatch(logIn);
  } catch (error) {
    console.log("User not created!");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    return { user };
  },
  reducers: {
    logout: (state) => {
      state = {};
      
      window.localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload;

      window.localStorage.setItem("user", JSON.stringify(state.user));
    });
  },
});

export const currentUser = (state) => {
  return state.user.user;
};

export const { logout } = userSlice.actions;

export default userSlice.reducer;
