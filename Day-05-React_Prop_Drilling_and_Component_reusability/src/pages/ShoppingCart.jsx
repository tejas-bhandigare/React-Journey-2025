import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

      <h2>Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
