import React from 'react'
import logo from './logo.svg';
import { BrowserRouter,Routers,Navigate, link,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import CSA from './pages/CSA'
// import Navbar2 from './Restaurant signup/Navbar2'
import RAS from './pages/RAS'
 import Dashboard  from './pages/Dashboard'
 import Dashboardaside from './components/Dashboardaside'
 import Dashboardnav from './components/Dashboardnav';
// import Navbar3 from './Login/Navbar3'
import Login from './pages/Login'
import Vendor from './components/Vendor'
// import Navbar3 from './Delivery/Navbar3'
import Homepage from './pages/Homepage'
import Dashfood from './pages/Dashfood'
import Fooddetails from './components/Fooddetails'
import { Dashcontact } from './pages/Dashcontact';
import { Contactdetails } from './components/Contactdetails';
import { useState } from 'react';
import { CartProvider } from './contexts/cartContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
    <>
    {/* <Navbar loggedIn = {isLoggedIn}/> */}
    <Routes>
    <Route path='/' element={<Homepage/>}/>

      <Route path='/customer/register' element={<CSA/>}/>

      <Route path="/restaurant/register" element={<RAS/>}/>

      <Route path="/login"  element={<Login changeLoginState={setIsLoggedIn}/>}/>

      {/* <Route path="/dashboard" element={isLoggedIn ? <Dashboard/>:  <Navigate replace to="/login" />}/> */}
      <Route path="/dashboard" element={<CartProvider><Dashboard/></CartProvider>}/>
       <Route path="/Dashfood"element={<CartProvider><Dashfood/></CartProvider>}/>
       <Route path="/Dashcontact"element={<CartProvider><Dashcontact/></CartProvider>}/>
<Route path='/'element={<Homepage/>}/>
    </Routes>
    {/* <CSA/>
   
    <RAS/>
    <Login/>  */}
    {/* <Navbar3/>
    <Homepage/> */}
    </>
    </BrowserRouter>
  );
}

export default App;
