import { Button } from '@mui/material';
import React, { useState, useForm, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from './Header';
import { Footer } from './Footer';



export const ContactForm = () => {

    
    const mainPath = 'http://localhost:3000/';


    const [checkAvailabilty, setCheckAvailabilty] = useState(false);
    const [enablesHour, setEnablesHour] = useState(true);
     
    const handleCheckAvailabilty = (e) => {
        const event = e.target.checked;
        console.log(checkAvailabilty);
        
        setCheckAvailabilty(e.target.checked);
        setEnablesHour(!enablesHour);
  
    };

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('service_75flfyr', 
        //                  'template_6y4ku0p',
        //                   form.current, 
        //                   'HW9ak_qW8P_X9MHEU'
        //                 )
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
          ClearFormValue();
    };

    const ClearFormValue = () => {
        
         let inputs =  document.querySelectorAll('input');
         inputs.forEach(i => i.value = '');

         //setEnablesHour(true);  
         document.getElementById("message").value = "";
         document.getElementById("recommendedBy").value = "";
         document.getElementById("acceptContactedCheckBoox").checked = false;
         document.getElementById("availableHoursTime").disabled = true;
         
         

    }

    
  return (
    <section>
        <Header/>
        <fieldset>
            

            <form 
                ref={form}
                method='post' 
                action="/"
                
            >
                <div id="contact" class="contact ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2><strong class="yellow">Contact us</strong><br/>Request a call back</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <form id="post_form" class="contact_form">
                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <input 
                                                className="contact_control" 
                                                placeholder=" Name" 
                                                type="text" 
                                                name='user_name'
                                                id='user_name'
                                                required
                                            /> 
                                        </div>
                                        <div class="col-md-12">
                                            <input 
                                                className="contact_control" 
                                                placeholder="Email" 
                                                type="email" 
                                                name='user_email'
                                                id='user_email'
                                                required 
                                            /> 
                                        </div>
                                        <div class="col-md-12">
                                            <input 
                                                className="contact_control" 
                                                placeholder="Phone Number " 
                                                type="tel" 
                                                name='user_phone'
                                                id='user_phone'
                                            />                          
                                        </div>
                                        <div class="col-md-12">
                                        
                                        <div>
                                            <textarea 
                                                class="textarea" 
                                                id = "message" 
                                                placeholder="Message" 
                                                type="type" 
                                                Message="Name"
                                                
                                            />
                                        </div>
                                        
                                        </div>
                                        <div>
                                            <label>Recommended By:
                                                <select 
                                                    className='contact_control'
                                                    name="recommendedBy" 
                                                    id="recommendedBy"
                                                    placeholder='Select'
                                                >
                                                    <option value="">Friend</option>
                                                    <option value="">Google Search</option>
                                                    <option value="">Others</option>

                                                </select>
                                            </label>
                                        
                                        </div>
                                        
                                        <div >
                                            <label  >Available Hours:
                                                <input 
                                                    className='contact_control'
                                                    id="availableHoursTime"
                                                    name="availableHoursTime"
                                                    
                                                    type="time" 
                                                />
                                            </label>
                                        </div>


                                        <div class="col-md-12">
                                            <button 
                                                    className="send_btn"
                                                    type='submit'
                                                    value='send'
                                                    onClick={sendEmail}
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>   
            </form>
        </fieldset>
        
        <Footer/>        
    </section>
  )
}
