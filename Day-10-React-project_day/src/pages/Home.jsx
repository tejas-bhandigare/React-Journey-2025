import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>🛒 Mini E-commerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
