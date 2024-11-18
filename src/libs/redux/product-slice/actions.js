import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "./services";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productAPI.getProducts();
     
       
      return response.data;
    } catch (error) {  
     return rejectWithValue(error);
    }
  }
);
