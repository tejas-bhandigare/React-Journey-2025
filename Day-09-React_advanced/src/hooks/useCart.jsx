import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return { cart, addToCart };
}

export default useCart;
