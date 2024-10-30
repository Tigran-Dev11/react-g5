import { useContext } from "react";
import { ProductContext } from "../providers/product-provider";

export const useProductContext = () => {
  return useContext(ProductContext);
};
