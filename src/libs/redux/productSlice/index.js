/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "./actions";


const initialState = {
  productCount: 0,
  status: "idle",
  getProductsStatus: "idle",
  products: [],
  product: null,
  getProductStatus: "idle",
  searchValue: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProductCount: (state, { payload }) => {
      state.productCount = state.productCount + payload;
    },
    decrementProductCount: (state, { payload }) => {
      if (state.productCount > 1)
        state.productCount = state.productCount - payload;
    },
    changeStatusToSuccess: (state) => {
      state.status = "";
    },
    onChangeSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
    searchProduct: (state) => {
      state.products = state.products.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(state.searchValue.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProductsStatus = "pending";
    }),
      builder.addCase(getProducts.rejected, (state) => {
        state.getProductsStatus = "error";
      }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        if (payload?.length) {
          state.getProductsStatus = "success";
          state.products = payload;
        }
      });

      builder.addCase(getProduct.pending, (state) => {
        state.getProductStatus = "pending"
      }),
      builder.addCase(getProduct.rejected, (state) => {
        state.getProductStatus = "error"
      }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.getProductStatus = "success";
        state.product = payload
      })
  },
});

const productActions = {
  ...productSlice.actions,
  getProducts,
  getProduct,
};

const productReducer = productSlice.reducer;

export { productActions, productReducer };
