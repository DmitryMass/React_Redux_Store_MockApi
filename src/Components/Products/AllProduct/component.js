import React from 'react';

import ProductItem from '../ProductItem/component';

import { nanoid } from 'nanoid';

const AllProducts = ({ currentProduct }) => {
  return (
    <div className="flex__admin">
      {currentProduct.map((product) => {
        return <ProductItem product={product} key={nanoid()} />;
      })}
    </div>
  );
};

export default AllProducts;
