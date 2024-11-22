import { createSelector } from "@reduxjs/toolkit";

const selectProduct = (state) => state;

export const productsSelector = createSelector(selectProduct, (state) => state.products);

