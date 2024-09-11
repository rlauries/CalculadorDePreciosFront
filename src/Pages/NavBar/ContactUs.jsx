import React from 'react';
//import emailjs from '@emailjs/browser';
 
import { Header } from '../Layouts/Header';
import '../../Style-components/Contactus.css';
import { ContactForm } from '../Layouts/ContactForm';

export const ContactUs = () => {

    

  return (
    <div className='viewport'>
        <Header/>
        <div className='container-contact-form'
            id='container-contact-id'
        >
             <ContactForm/>
        </div>
        
    </div>
  )
}
