import React from 'react';

import styles from '../index.m.css';

const OrderMenu = ({ cartProducts }) => {
  const getPrice = cartProducts.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  return (
    <>
      <div className={styles.order__price}>
        <p className={styles.order__total}>
          Order price: <span>{getPrice}$</span>
        </p>
      </div>
      <button className={styles.order__checkout}>Checkout</button>
    </>
  );
};

export default OrderMenu;
