import React from 'react';
import { useSelector } from 'react-redux';

import CartProducts from './CartProducts/component';
import OrderMenu from './OrderFilter/component';

import styles from './index.m.css';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <main className={styles.cart}>
      <div className="container flex__cart">
        {cartProducts.length === 0 ? (
          <div>There no one Product</div>
        ) : (
          <>
            <CartProducts cartProducts={cartProducts} />
            <div className="cart__form">
              <OrderMenu cartProducts={cartProducts} />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
