import { nanoid } from 'nanoid';
import React from 'react';

import styles from './index.m.css';

const Paginate = ({ productList, productPerPage, pagination }) => {
  const page = [];

  for (let i = 1; i <= Math.ceil(productList.length / productPerPage); i++) {
    page.push(i); // i = 1, 2 , 3 , 4 , 5....
  }

  return (
    <ul className="paginate__list">
      {page.map((number) => (
        <li className="paginate__item" key={nanoid()}>
          <button
            className={styles.paginate__link}
            onClick={() => pagination(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
