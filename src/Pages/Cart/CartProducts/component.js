import React from 'react';
import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import CartItem from '../CartItem/component';

import styles from './index.m.css';

const CartProducts = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className={styles.cart__list}>
      {cartProducts.map((product) => {
        return <CartItem product={product} key={nanoid()} />;
      })}
    </div>
  );
};

export default CartProducts;
