import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

import { productApi } from "./services";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productApi.getProducts();
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
