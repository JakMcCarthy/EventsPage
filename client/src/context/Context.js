import { createContext, useContext, useReducer } from "react";
import { cartReducer} from './AppReducer';

const Cart = createContext();


const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

 

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;