// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={() => dispatch(removeFromCart(item))}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
