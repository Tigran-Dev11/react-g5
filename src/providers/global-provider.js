import { useContext, createContext, useState } from "react";

// create a context

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [basketItems, setBasketItems] = useState([]);


  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
        basketItems, 
        setBasketItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
