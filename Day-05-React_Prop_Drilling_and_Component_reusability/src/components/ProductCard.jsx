import "./../styles/ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
