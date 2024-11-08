import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: 0,
  status: "idle",

};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProductCount: (state, { payload }) => {
      state.productCount = state.productCount + payload;
    },

    decrementProductCount: (state, { payload }) => {
      state.productCount = state.productCount - payload;
    },

    changeStatusToSuccess: (state) => {
      state.status = "";
    },
  },
});

const productActions = {
  ...productSlice.actions,
};

const productReducer = productSlice.reducer;

export { productActions, productReducer, productSlice };