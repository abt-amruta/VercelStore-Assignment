import { createContext, useState } from "react";

export const CartPovider = createContext();

const CartContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState();
  const [current, setCurrent] = useState();
  const [showCart, setShowCart] = useState();

  return (
    <>
      <CartPovider.Provider
        value={{
          products,
          cart,
          loading,
          current,
          showCart,
          setProducts,
          setCart,
          setLoading,
          setCurrent,
          setShowCart,
        }}
      >
        {children}
      </CartPovider.Provider>
    </>
  );
};

export default CartContext;
