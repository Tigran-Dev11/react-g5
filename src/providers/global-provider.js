import {  createContext, useState } from "react";



const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  
  const [basketItems, setBasketItems] = useState([]);


  return (
    <GlobalContext.Provider
      value={{
        basketItems, 
        setBasketItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };