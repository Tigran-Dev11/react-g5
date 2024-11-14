/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "./actions";
import { STATUS } from "../../../utils/constant";
import { calculateProductCount } from "../../../utils/calculateProductCount";

const initialState = {
  productCount: 0,
  status: "idle",
  products: [],
  getProductsStatus: "idle",
  product: null,
  getProductStatus: "idle",
  searchValue: "",
  basketItems: [],
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
      const basketItem = {
        id: payload.id,
        img: payload.image,
        title: payload.title,
        price: payload.price,
        quantity: 1,
      };


      if(!state.basketItems.length){
        state.basketItems = [basketItem];
      }else{

        const itemIndex = state.basketItems.findIndex(
          (item) => item.id === basketItem.id
        );


        if(itemIndex === -1){
          state.basketItems = [...state.basketItems, basketItem]; 
        }else{
          state.basketItems = state.basketItems.map((item)=>{
            if(item.id === basketItem.id){
              return {...item, quantity: item.quantity + 1 }
            }
            return item;
          })
        }
      }

     state.productCount = calculateProductCount(state.basketItems)

    localStorage.setItem("products", JSON.stringify(state.basketItems));
    },

    getExistingDataLocalStorage: (state, {payload})=>{
      state.basketItems = payload;
      state.productCount = calculateProductCount(payload)


    }
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



