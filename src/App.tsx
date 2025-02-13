import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/home";
import Login from '../src/pages/login'
import Address from './pages/address';
import '../src/configure/i18n/i18n'
import AddNewAddress from './pages/address/addNewAddress';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/address' element={<Address />} />
          <Route path='/addAddress' element={<AddNewAddress />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
