import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { CompatRouter, Route, Routes } from "react-router-dom-v5-compat";
import { App } from '../../App';

import { AluminumCustomFence } from '../AluminumCustomFence'; 
import { ChainLinkFence } from '../ChainLinkFence';
import { DuraFence } from '../DuraFence';
import { AddEmployee } from '../AddEmployee';
import { Home } from '../Home';
import { Service } from '../Service';

import { ContactForm } from '../ContactForm';
import { Gallery } from '../Gallery';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      
       <CompatRouter>
          <div className='container'>
            <Routes>
                <Route path="" element={<Home/>} />
              
                <Route path="/home" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/service" element={<Service/>} /> 
                <Route path="/contactform" element={<ContactForm/>} /> 
                
                
                

                <Route path="/chainlinkfence" element={<ChainLinkFence/>} /> 
                <Route path="/durafence" element={<DuraFence/>} /> 
                <Route path="/aluminumcustomfence" element={<AluminumCustomFence/>} /> 


                <Route path="/addemployees" element={<AddEmployee/>} /> 
            </Routes> 
           
          </div>
           
         
       </CompatRouter>
     </BrowserRouter>
  )
}
