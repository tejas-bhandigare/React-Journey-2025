import { useCallback } from "react";
import useCart from "./hooks/useCart";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const { cart, addToCart } = useCart();

  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Headphones", price: 100 },
  ];

  // Memoized function
  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, [addToCart]);

  return (
    <div>
      <h1>🛍️ Shopping Cart</h1>
      <div style={{ display: "flex" }}>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} onAdd={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
