import { createSelector } from "@reduxjs/toolkit";

const selectProduct = (state) => state;

export const productSelector = createSelector(
  selectProduct,
  (state) => state.products
);

export const productCountSelector = createSelector(
  selectProduct,
  (state) => state.products.productCount
);

