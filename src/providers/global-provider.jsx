import {createContext, useState } from "react";


const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  // const [open, setOpen] = useState(false);
  const [count,setCount] =useState(1)
  const [basketItems, setBasketItems] = useState([]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count >= 2) setCount(count - 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
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
