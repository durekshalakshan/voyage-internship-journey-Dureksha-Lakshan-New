import React from 'react';

const Cart = ({ cart = [], onRemove, total = 0 }) => {
  return (
    <aside className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-info">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div>
                    <div className="cart-name">{item.name}</div>
                    <div>Qty: {item.quantity} × ${Number(item.price).toFixed(2)}</div>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total: </strong>${Number(total).toFixed(2)}
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
