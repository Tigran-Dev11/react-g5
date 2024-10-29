import { createContext, useState } from "react";

const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  return (
    <ProductContext.Provider value={{ basketItems, setBasketItems }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
