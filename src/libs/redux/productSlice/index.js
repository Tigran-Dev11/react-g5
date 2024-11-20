import { createSlice } from "@reduxjs/toolkit";
import { calculateProductCount } from "../../../utils/calculateProductCount";

const initialState = {
  productCount: 0,
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementProductCount: (state, { payload }) => {
      state.basketItems = state.basketItems?.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      localStorage.setItem("products", JSON.stringify(state.basketItems));
    },

    decrementProductCount: (state, { payload }) => {
      if (state.quantity > 1) state.quantity = state.quantity - payload;
    },

    addBasket: (state, { payload }) => {
      const basketItem = {
        id: payload.id,
        img: payload.image,
        title: payload.title,
        price: payload.price,
        quantity: 1,
      };

      if (!state.basketItems?.length) {
        state.basketItems = [basketItem];
      } else {
        const itemIndex = state.basketItems.findIndex(
          (item) => item.id === basketItem.id
        );

        if (itemIndex === -1) {
          state.basketItems = [...state.basketItems, basketItem];
        } else {
          state.basketItems = state.basketItems.map((item) => {
            if (item.id === basketItem.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
        }
      }
      state.productCount = calculateProductCount(state.basketItems);

      localStorage.setItem("products", JSON.stringify(state.basketItems));
    },
  },
});

const productActions = {
  ...productSlice.actions,
};

const productReducer = productSlice.reducer;

export { productActions, productReducer, productSlice };
