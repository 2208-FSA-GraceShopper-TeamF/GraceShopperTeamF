import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Thunk to fetch all
export const fetchExamples = createAsyncThunk("fetchExamples", async () => {
  try {
    const { data } = await axios.get("/api/examples");
    return data;
  } catch (error) {
    console.log("Couldn't fetch examples!", err);
  }
});

const initialState = { examples: [] };

const exampleSlice = createSlice({
  name: "examples",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchExamples.fulfilled, (state, action) => {
      return { examples: action.payload };
    });
  },
});

export const selectExamples = (state) => {
  return state.examples.examples;
};
export default exampleSlice;
