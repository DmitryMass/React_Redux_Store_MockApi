import React from 'react';

import styles from './index.m.css';

const ProductFilter = () => {
  return (
    <nav className={styles.nav__filter}>
      <div>Price filter</div>
      <div>Name Filter</div>
      <div>Category filter</div>
    </nav>
  );
};

export default ProductFilter;
