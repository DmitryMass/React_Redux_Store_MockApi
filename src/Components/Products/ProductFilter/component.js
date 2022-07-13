import React from 'react';

import styles from './index.m.css';
import { useProductFilter } from './ProductFilterHook/component';

const ProductFilter = ({ setCurrentPage }) => {
  const { categories, chooseCategory } = useProductFilter(setCurrentPage);

  return (
    <nav className={styles.categories__nav}>
      {categories.map((el) => (
        <div
          className={styles.categories__item}
          key={el.id}
          onClick={() => chooseCategory(el.name)}
        >
          {el.name}
        </div>
      ))}
    </nav>
  );
};

export default ProductFilter;
