import { createAsyncThunk } from "@reduxjs/toolkit";

import { productApi } from "./services";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (gender, { rejectWithValue }) => {
    try {
      const response = await productApi.getProducts();
      const data = await response.json();
      if(gender){
        return data?.filter((item)=>item.category.includes(gender))
      }else{
        return data
      }
      // return data?.filter((item)=>item.category.includes(gender));
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





