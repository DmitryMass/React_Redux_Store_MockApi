import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Products from '../Pages/Products/component';
import Footer from './Footer/component';
import Header from './Header/component';
import NotFound from '../Pages/NotFound/component';
import Cart from '../Pages/Cart/component';

import { fetchProducts } from '../Store/Actions/component';
import Home from '../Pages/Home/component';
import Admin from '../Pages/Admin/component.';

import { PAGE_ROUTES } from './Utils/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path={PAGE_ROUTES.HOME} element={<Home />} />
          <Route path={PAGE_ROUTES.PRODUCTS} element={<Products />} />
          <Route path={PAGE_ROUTES.CART} element={<Cart />} />
          <Route path={PAGE_ROUTES.ADMIN} element={<Admin />} />
          <Route path={PAGE_ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
