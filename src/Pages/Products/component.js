import React, { useState } from 'react';
import AllProducts from '../../Components/Products/AllProduct/component';
import useProductHook from '../../Components/Products/AllProduct/ProductHook/component';

import ProductFilter from '../../Components/Products/ProductFilter/component';

import styles from './index.m.css';
import Paginate from './Paginate/component';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  const { productList, pagination, currentProduct } = useProductHook(
    currentPage,
    setCurrentPage,
    productPerPage
  );

  return (
    <main className={styles.main}>
      <div className="container">
        <div className="grid__products">
          <ProductFilter setCurrentPage={setCurrentPage} />
          <AllProducts currentProduct={currentProduct} />
        </div>
        <Paginate
          pagination={pagination}
          productList={productList}
          productPerPage={productPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default Products;
