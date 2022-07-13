import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/Actions/component';

import styles from './index.m.css';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, description, quantity, img } = product;

  return (
    <div className={styles.cart__box}>
      <div className={styles.cart__img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cart__order}>
        <div>
          <h3 className={styles.cart__title}>{title}</h3>
          <span>{quantity}</span>
          <p className={styles.cart__price}>{price} $</p>
          <p className={styles.cart__description}>{description}</p>
        </div>
        <button
          className={styles.cart__remove}
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartItem;
