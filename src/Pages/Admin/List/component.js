import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../../Store/Actions/component';

import styles from './index.m.css';

const List = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.products);

  return (
    <div className={styles.product__wrapper}>
      {productsList.map((product) => {
        return (
          <div className={styles.product__box} key={product.id}>
            <div className={styles.product__img}>
              <img src={product.img} alt="" />
            </div>
            <div className={styles.product__txt}>
              <h5 className={styles.product__title}>{product.title}</h5>
              <p className={styles.product__price}>${product.price}</p>
            </div>
            <div className={styles.product__btns}>
              <button
                className={styles.product__edit}
                onClick={() => dispatch(editProduct(product))}
              >
                Edit
              </button>
              <button className={styles.product__delete}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
