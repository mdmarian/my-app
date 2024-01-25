import React from "react";
import "./styles/components/ProductCard.css";

const productcard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Produsul ${product.title} a fost adăugat în coș.`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{`Preț: $${product.price.toFixed(2)}`}</p>
      <button onClick={handleAddToCart}>Adaugă în coș</button>
    </div>
  );
};

export default productcard;
