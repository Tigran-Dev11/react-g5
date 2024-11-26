import { useContext } from "react";
import { GlobalContext } from "../providers/global-provider";

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

