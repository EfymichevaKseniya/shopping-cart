import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@/styles/reset.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Header } from '@/widgets/header/header';
import Catalog from '@/pages/catalog/catalog';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCart from '@/pages/shoppingCart/page';
import Home from '@/pages/home/home';
import routes from '@/navigator/routes.json';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/shopping-cart" element={<Home />} />
            <Route path={routes.cart} element={<ShoppingCart />} />
            <Route path={routes.catalog} element={<Catalog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
