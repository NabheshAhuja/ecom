import './cart-item.styles.scss';

import React from 'react';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  let totalPrice = quantity * price;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price} = ${totalPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
