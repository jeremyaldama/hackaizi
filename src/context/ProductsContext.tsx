// context/CounterContext.js
import { createContext, useState, useContext } from "react";

const ProductsContext = createContext(null);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <ProductsContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
