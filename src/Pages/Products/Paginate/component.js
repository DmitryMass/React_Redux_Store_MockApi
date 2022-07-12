import { nanoid } from 'nanoid';
import React from 'react';

import styles from './index.m.css';

const Paginate = ({
  productList,
  productPerPage,
  pagination,
  setCurrentPage,
}) => {
  const page = [];

  for (let i = 1; i <= Math.ceil(productList.length / productPerPage); i++) {
    page.push(i); // i = 1, 2 , 3 , 4 , 5....
  }

  const nextPage = () =>
    setCurrentPage((prev) => {
      let count = prev + 1;
      if (count <= page.length) {
        return count;
      } else {
        return prev;
      }
    });

  const prevPage = () =>
    setCurrentPage((prev) => {
      let count = prev - 1;
      if (count < 1) {
        return prev;
      }
      return count;
    });

  return (
    <div className={styles.paginate__box}>
      <button className={styles.paginate__btn} onClick={prevPage}>
        &larr;
      </button>
      <ul className={styles.paginate__list}>
        {page.map((number) => (
          <li className={styles.paginate__item} key={nanoid()}>
            <button
              className={styles.paginate__link}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.paginate__btn} onClick={nextPage}>
        &rarr;
      </button>
    </div>
  );
};

export default Paginate;
