import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [basketItems, setBasketItems] = useState([]);
  const { getItem } = useLocalStorage("basketItems");

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count >= 2) setCount(count - 1);
  };

  useEffect(() => {
    const data = getItem();
    if (data) setBasketItems(data);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        basketItems,
        setBasketItems,
        increase,
        decrease,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
