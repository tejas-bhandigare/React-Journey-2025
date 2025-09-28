import React, { useMemo } from "react";

function Cart({ cart }) {
  const total = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div>
      <h2>🛒 Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
