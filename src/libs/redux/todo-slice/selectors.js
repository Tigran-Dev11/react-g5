import { createSelector } from "@reduxjs/toolkit";

const selectValue = (state) => state;

export const TodoSelector = createSelector(selectValue, (state) => state.todo)