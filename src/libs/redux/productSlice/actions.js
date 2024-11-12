import { createAsyncThunk } from "@reduxjs/toolkit";

import { productApi } from "./services";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productApi.getProducts();
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await productApi.getProduct(id);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)





