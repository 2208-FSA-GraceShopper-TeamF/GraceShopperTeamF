import exampleSlice from "../reducers/tumblerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    examples: exampleSlice.reducer,
  },
});

export default store;
