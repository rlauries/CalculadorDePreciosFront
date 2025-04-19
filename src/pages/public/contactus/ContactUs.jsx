import React from 'react';
//import emailjs from '@emailjs/browser';
 
import { Header } from '../../../componets/Header';
import '../../../styles/Contactus.css';
import { ContactForm } from './ContactForm';

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
