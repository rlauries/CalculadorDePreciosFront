import React, {useState} from 'react';

import { Header } from '../../componets/Header/Header.jsx';
import '../../styles/Contactus.css';
import {ContactUsForm} from '../../componets/ContactUsForm/ContactUsForm.jsx';

export const ContactUs = () => {
    
  

  return (
    <div className='viewport'>
        <Header/>
        <div>
          <img className='hero-image' src="images/Contact-Us-Banner.png" alt="HeroBanner" />
        </div>
        <div className='contactu-info'>
          <h1><strong>&nbsp; | </strong>At Welding Group</h1>
          <p>
             Your project matters. We commit to contacting you within 24 hours of receiving your information. For immediate questions, call us at (800)-486-8465.
          </p>
           
        </div>
        <ContactUsForm/>
    </div>
  )
}
