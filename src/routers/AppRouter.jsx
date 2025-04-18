import React from 'react'
import {Route, Routes } from "react-router-dom-v5-compat";

import { AluminumCustomFence } from '../Pages/Fences/AluminumCustomFence'; 
import { ChainLinkFence } from '../Pages/Fences/ChainLinkFence';
import { DuraFence } from '../Pages/Fences/DuraFence';
import { Home } from '../Pages/NavBar/Home';
import { Service } from '../Pages/NavBar/Service';
import {PergolaList} from '../ServicesToAPI/PergolaList';

import { Gallery } from '../Pages/NavBar/Gallery';
import { SignUp } from '../Pages/Login-SignUp/SignUp';
import { ContactUs } from '../Pages/NavBar/ContactUs';
import { Login } from '../Pages/Login-SignUp/Login';



export const AppRouter = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
      
        <Route path="/home" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/fences" element={<Service/>} /> 
        <Route path="/contactus" element={<ContactUs/>} /> 
        <Route path="/pergolas" element={<PergolaList/>} /> 
        
        <Route path="/chainlinkfence" element={<ChainLinkFence/>} /> 
        <Route path="/durafence" element={<DuraFence/>} /> 
        <Route path="/aluminumcustomfence" element={<AluminumCustomFence/>} /> 
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

    </Routes> 
  )
}
