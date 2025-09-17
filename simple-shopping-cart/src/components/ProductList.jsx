import React from 'react';
import Product from './Product';

const ProductList = ({ products = [], onAdd }) => {
  return (
    <section className="product-list">
      <h2>Products</h2>
      <div className="grid">
        {products.map(p => (
          <Product key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
