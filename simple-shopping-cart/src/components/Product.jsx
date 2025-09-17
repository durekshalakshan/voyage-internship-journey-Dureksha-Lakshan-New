import React from 'react';

const Product = ({ product, onAdd }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">${Number(product.price).toFixed(2)}</p>
      <button className="btn" onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
