import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Verify from './pages/Verify.jsx';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collections' element={<Collections />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Product/:productId' element={<Product />} />
        <Route path='/Verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
