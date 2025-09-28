import React from "react";

const ProductCard = React.memo(({ product, onAdd }) => {
  console.log("Rendering:", product.name); // debug
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
});

export default ProductCard;
