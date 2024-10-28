import { GlobalContext } from "../providers/global-provider";

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext };