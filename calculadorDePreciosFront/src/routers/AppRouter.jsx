import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { CompatRouter, Route, Routes } from "react-router-dom-v5-compat";

import { AluminumCustomFence } from '../Pages/Fences/AluminumCustomFence'; 
import { ChainLinkFence } from '../Pages/Fences/ChainLinkFence';
import { DuraFence } from '../Pages/Fences/DuraFence';
import { Home } from '../Pages/NavBar/Home';
import { Service } from '../Pages/NavBar/Service';

import { Gallery } from '../Pages/NavBar/Gallery';
import { SignUp } from '../Pages/Login-SignUp/SignUp';
import { ContactUs } from '../Pages/NavBar/ContactUs';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      
       <CompatRouter>
          
            <Routes>
                <Route path="" element={<Home/>} />
              
                <Route path="/home" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/service" element={<Service/>} /> 
                <Route path="/contactus" element={<ContactUs/>} /> 
                
                <Route path="/chainlinkfence" element={<ChainLinkFence/>} /> 
                <Route path="/durafence" element={<DuraFence/>} /> 
                <Route path="/aluminumcustomfence" element={<AluminumCustomFence/>} /> 
                <Route path="/SignUp" element={<SignUp/>} />
    
            </Routes> 
         
       </CompatRouter>
     </BrowserRouter>
  )
}
