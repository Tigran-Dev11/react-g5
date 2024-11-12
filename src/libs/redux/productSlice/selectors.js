import { createSelector } from "@reduxjs/toolkit";

const selectProduct = (state) => state;

export const productsSelector = createSelector(selectProduct, (state) => state.products);

export const productSelector = createSelector(selectProduct, (state) => state.product)
