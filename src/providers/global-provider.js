import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [count, setCount] = useState(1);
  const { getItem } = useLocalStorage("basketItems");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count >= 2) setCount(count - 1);
  };

  useEffect(() => {
    const data = getItem();

    if (data) setBasketItems(data);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        basketItems,
        setBasketItems,
        count,
        setCount,
        increment,
        decrement,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
