import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

import './checkout.styles.scss';

import React from 'react';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <br />
              <span>{quantity}</span>
              <br />
              <span
                onClick={() => {
                  removeItemToCart(cartItem);
                }}>
                decrement
              </span>
              <br />
              <span
                onClick={() => {
                  addItemToCart(cartItem);
                }}>
                increment
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
