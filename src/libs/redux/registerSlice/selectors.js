import { createSelector } from "@reduxjs/toolkit";

const selectRegister = (state) => state;

export const registerSelector = createSelector(
  selectRegister,
  (state) => state.register
);
