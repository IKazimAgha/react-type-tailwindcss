import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/home";
import Login from '../src/pages/login'
import Address from './pages/address';
import '../src/configure/i18n/i18n'
import AddNewAddress from './pages/address/addNewAddress';
import RouteStatus from '../src/pages/routeStatus';
import EditAddress from './pages/address/editAddress';
import UserProfile from './pages/address/profile';
import Absence from './pages/absences';
import AddNewAbsence from './pages/absences/addNewAbsence';
import { ThemeProvider, useLangugageContext } from './contextAPI/contextAPI';

export const ConfigRoutes = () => {
  const { localeLang } = useLangugageContext();
  console.log("checking locale language", localeLang)
  return(
    <>
      <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/address' element={<Address />} />
            <Route path='/addAddress' element={<AddNewAddress />} />
            <Route path='/routeStatus' element={<RouteStatus />} />
            <Route path='/editAddress' element={<EditAddress />} />
            <Route path='/absence' element={<Absence />} />
            <Route path='/addAbsence' element={<AddNewAbsence />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

function App() {
  return (
    <>
      <ThemeProvider>
        <ConfigRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
