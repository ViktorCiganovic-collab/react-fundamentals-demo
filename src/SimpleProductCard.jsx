
// SimpleProductCard.js
import React from 'react';
import './App.css';

function SimpleProductCard({ product }) {
  return (
    <div className="simple-product-card">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="simple-product-image" 
      />
      <div className="simple-product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button className="simple-buy-button">Buy</button>
      </div>
    </div>
  );
}

export default SimpleProductCard;