import { createSelector } from "@reduxjs/toolkit";

const selectCount = (state) => state

export const countSelector = createSelector(selectCount, (state) => state.counter)
