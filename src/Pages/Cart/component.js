import React from 'react';

import CartProducts from './CartProducts/component';

const Cart = () => {
  return (
    <main className="cart">
      <div className="container">
        <CartProducts />
        <div className="cart__form">
          <p>There form price</p>
          <p>There form Order</p>
          <p>There form Other</p>
        </div>
      </div>
    </main>
  );
};

export default Cart;
