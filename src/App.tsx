import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/reset.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Header } from './shared/header/header';
import Catalog from './pages/catalog/catalog';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCart from './pages/shoppingCart/page';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
