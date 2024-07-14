// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="product-list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
