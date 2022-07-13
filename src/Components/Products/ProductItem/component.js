import React from 'react';

import Button from '../../Button/component';
import useItemHook from './ItemHook/component';

import styles from '../AllProduct/index.m.css';

const ProductItem = ({ product }) => {
  const { title, price, id, img } = product;
  const { item, onBtnClick } = useItemHook(id);
  return (
    <div className={styles.product__box}>
      <div className={styles.product__img}>
        <img src={img} alt="good and wares" />
      </div>
      <div className={styles.product__txt}>
        <h5 className={styles.product__title}>{title}</h5>
        <p className={styles.product__price}>${price}</p>
      </div>
      <Button
        onClick={onBtnClick}
        type={item ? 'btn__secondary' : 'btn__primary'}
      >
        {item ? 'Delete from Cart' : 'Add To Cart'}
      </Button>
    </div>
  );
};

export default ProductItem;
