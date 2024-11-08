import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, { payload }) => {
      state.count = state.count + payload;
    },
    decrementCount: (state, { payload }) => {
      state.count = state.count - payload;
    },
  },
});

const counterActions = {
  ...counterSlice.actions,
};

const counterReducer = counterSlice.reducer;

export { counterSlice, counterActions, counterReducer };
