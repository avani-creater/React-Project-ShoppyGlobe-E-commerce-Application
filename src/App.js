
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';  

import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
