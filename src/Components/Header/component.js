import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './index.m.css';

import logo from '../../Assets/Icon/store-logo.svg';
import cart from '../../Assets/Icon/cart-icon.svg';

import { PAGE_ROUTES } from '../Utils';

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const activeClass = ({ isActive }) => (isActive ? styles.active : undefined);

  return (
    <header className={styles.header}>
      <div className="container flex__header">
        <Link to={PAGE_ROUTES.HOME} className={styles.header__logo}>
          <object data={logo} type="" />
        </Link>
        <nav>
          <NavLink to={PAGE_ROUTES.HOME} className={activeClass}>
            Home
          </NavLink>
          |{' '}
          <NavLink to={PAGE_ROUTES.PRODUCTS} className={activeClass}>
            Products
          </NavLink>
          |{' '}
          <NavLink to={PAGE_ROUTES.CONTACT} className={activeClass}>
            Contact
          </NavLink>
        </nav>
        <div className={styles.header__cartBox}>
          <NavLink to={PAGE_ROUTES.ADMIN} className={activeClass}>
            Admin
          </NavLink>
          <Link to={PAGE_ROUTES.CART} className={styles.header__cart}>
            <object data={cart} type=""></object>
          </Link>
          <span className={styles.header__cart_counter}>
            {cartItems.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
