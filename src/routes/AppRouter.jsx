import React from 'react'
import {Route, Routes } from "react-router-dom-v5-compat";

import { AluminumCustomFence } from '../pages/private/fences/AluminumCustomFence'; 
import { ChainLinkFence } from '../pages/private/fences/ChainLinkFence';
import { DuraFence } from '../pages/private/fences/DuraFence';
import { Home } from '../pages/public/Home';
import { Service } from '../pages/public/Service';
import {PergolaList} from '../servicesToAPI/PergolaList';
import { Gallery } from '../pages/public/Gallery';
import { SignUp } from '../pages/public/login-signup/SignUp';
import { ContactUs } from '../pages/public/contactus/ContactUs';
import { Login } from '../pages/public/login-signup/Login';
// import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {
  return (
    <Routes>
        {/* Public */}
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/fences" element={<Service/>} /> 
            <Route path="/contactus" element={<ContactUs/>} /> 
            <Route path="/pergolas" element={<PergolaList/>} /> 
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/chainlinkfence" element={<ChainLinkFence/>} />
            <Route path="/durafence" element={<DuraFence/>} />
            <Route path="/aluminumcustomfence" element={<AluminumCustomFence />} />
            
        {/* Private
            <Route path="/chainlinkfence" element={
              <PrivateRoute>
                <ChainLinkFence/>
              </PrivateRoute>
            } /> 
            <Route path="/durafence" element={
              <PrivateRoute>
                <DuraFence />
              </PrivateRoute>
            } />
            <Route path="/aluminumcustomfence" element={
              <PrivateRoute>
                <AluminumCustomFence />
              </PrivateRoute>
            } /> */}
           
    </Routes> 
  )
}
