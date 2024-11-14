/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "./actions";
import { STATUS } from "../../../utils/constant";

const initialState = {
  productCount: 0,
  status: "idle",
  products: [],
  getProductsStatus: "idle",
  product: null,
  getProductStatus: "idle",
  searchValue: "",
  basketItems: [],
  basketItem: null,
  basketItemExist: null,
  updateBasketItems: [],
  updatedBasketItems: [],
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
    addBasket: (state, { payload }) => {
      state.basketItem = {
        id: payload.id,
        img: payload.image,
        title: payload.title,
        price: payload.price,
        quantity: state.productCount,
      };

      state.basketItemExist = state.basketItems.find(
        (item) => item.id === payload.id
      );
      console.log(state.basketItems);
      if (!state.basketItemExist) {
        state.updateBasketItems = [...state.basketItems, state.basketItem];
        localStorage.setItem(
          "product",
          JSON.stringify(state.updateBasketItems)
        );
        return;
      }

      state.updatedBasketItems = state.basketItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + state.productCount,
          };
        }
        return item;
      });
      localStorage.setItem("product", JSON.stringify(state.updatedBasketItems));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.getProductsStatus = STATUS.pending;
    // eslint-disable-next-line no-sequences
    }),
      builder.addCase(getProducts.rejected, (state) => {
        state.getProductsStatus = STATUS.rejected;
      }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        if (payload?.length) {
          state.getProductsStatus = STATUS.fulfilled;
          state.products = payload;
        }
      });

    builder.addCase(getProduct.pending, (state) => {
      state.getProductStatus = STATUS.pending;
    // eslint-disable-next-line no-sequences
    }),
      builder.addCase(getProduct.rejected, (state) => {
        state.getProductStatus = STATUS.rejected;
      }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.getProductStatus = STATUS.fulfilled;
        state.product = payload;
      });
  },
});

const productActions = {
  ...productSlice.actions,
  getProducts,
  getProduct,
};

const productReducer = productSlice.reducer;

export { productActions, productReducer };



