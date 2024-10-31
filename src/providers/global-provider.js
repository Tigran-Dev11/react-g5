import {  createContext, useState } from "react";



const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  
  const [basketItems, setBasketItems] = useState([]);
  const [count, setCount] = useState(1);

   const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
       if(count >= 2) setCount(count - 1)    
    };

  return (
    <GlobalContext.Provider
      value={{
        basketItems, 
        setBasketItems,
        count,setCount,increment,decrement
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };