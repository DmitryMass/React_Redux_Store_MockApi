import React from 'react';

import ProductItem from '../ProductItem/component';

import { nanoid } from 'nanoid';
import styles from './index.m.css';

const AllProducts = ({ currentProduct }) => {
  return (
    <div className={styles.product__list}>
      {currentProduct.map((product) => {
        return <ProductItem product={product} key={nanoid()} />;
      })}
    </div>
  );
};

export default AllProducts;
