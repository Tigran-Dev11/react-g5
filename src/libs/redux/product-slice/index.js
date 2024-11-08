/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";

const initialState = {
  productCount: 0,
  status: "idle",
  getProductStatus: "idle",
  products: [],
  searchValue: '',
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProductCount: (state, { payload }) => {
      state.productCount = state.productCount + payload;
    },
    changeStatusToSuccess: (state) => {
      state.status = "";
    },
    onChangeSearchValue: (state, {payload}) => {
      state.searchValue = payload;
    },
    searchProduct: (state)=>{
        state.products = state.products.filter((item)=>{
          return item.title.toLowerCase().includes(state.searchValue.toLowerCase())
        })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProductStatus = "pending";
    }),
    builder.addCase(getProducts.rejected, (state) => {       
      state.getProductStatus = "error";
    }),
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        if (payload?.length) {
          state.getProductStatus = "success";
          state.products = payload;
        }
    })
      
  },
});

const productActions = {
  ...productSlice.actions,
  getProducts,
};

const productReducer = productSlice.reducer;

export { productActions, productReducer, productSlice };
