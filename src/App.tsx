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
import Absence from './pages/absences';
import AddNewAbsence from './pages/absences/addNewAbsence';
import { ThemeProvider, useLangugageContext } from './contextAPI/contextAPI';
import UserProfile from './pages/profile';
import NotificationScreen from './pages/notification';
import GuardiansList from './pages/guardians/guardiansList';
import AddGuardian from './pages/guardians/addGuardian';

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
            <Route path='/notifications' element={<NotificationScreen />} />
            <Route path='/addAbsence' element={<AddNewAbsence />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/guardians' element={<GuardiansList />} />
            <Route path='/addGuardian' element={<AddGuardian />} />
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
