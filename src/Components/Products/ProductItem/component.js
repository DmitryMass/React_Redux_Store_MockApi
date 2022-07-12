import React from 'react';

import styles from '../AllProduct/index.m.css';
import girl from '../../../Assets/Img/girl.jpg';
import Button from '../../Button/component';
import useItemHook from './ItemHook/component';

const ProductItem = ({ product }) => {
  const { title, price, description, id } = product;
  const { item, onBtnClick } = useItemHook(id);

  return (
    <div className={styles.product__box}>
      <div className={styles.product__img}>
        <img src={girl} alt="good and wares" />
      </div>
      <div className={styles.product__txt}>
        <h5 className={styles.product__title}>{title}</h5>
        <p className={styles.product__description}>{description}</p>
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
