import React, {useState} from 'react';
//import emailjs from '@emailjs/browser';
 
import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';
import InputMask from 'react-input-mask';
import  CustomerModelForAPI  from '../../Models/CustomerModelForAPI';
import axios from 'axios';
import '../../Style-components/FormStyle.css';



export const ContactUs = () => {

    let [setCustomerFromDb] = useState(''); 
    
    //Create object from ContactForm View
    const handleOnClick = (mycustomer) => {
        let id = 1;
        let name = document.getElementById('name').value;    
        let lastName = document.getElementById('lastname').value;    
        let email = document.getElementById('email').value;    
        let phoneNumber = document.getElementById('phone-Number').value;    
        let address = document.getElementById('address').value;    
        let city = document.getElementById('city').value;    
        let state = document.getElementById('stateName').value;    
        let zipCode = document.getElementById('zipcode').value;    
        
        mycustomer = new CustomerModelForAPI(
            id,
            name,
            lastName,
            email,
            phoneNumber,
            address,
            city,
            state,
            zipCode,
            
        );
        fetchCustomer(mycustomer)
        
    };

    const fetchCustomer = (mycustomer) => {
         
        
        let url = 'https://localhost:7142/api/customer/processCustomer';
        let responses = axios.post(url, mycustomer)
                             .then((responses) => {setCustomerFromDb(responses.data);
                                const {name, lastName} = responses.data;
                                alert(`Respuesta recibida:\nNombre: ${name}\nApellido: ${lastName}`);
                              })
                             .catch((error) => {console.error('Error en la solicitud:', error);});
         return responses;                    
    };
    

  return (
    <section>
        <Header/>
        <div className='container-contact-form'
            id='container-contact-id'
        >
            <legend className='legenda-Contact-Form'>Contact us</legend> 
            <div className='dinamic-form-contact-form'>
                <div className="floating-label ">
                        <input 
                            className="contact_control" 
                            placeholder="" 
                            type="text" 
                            name='name'
                            id='name'
                            required
                        /> 
                        <label for="name">Name</label>
                </div>
                <div className="floating-label">
                    <input 
                        className="contact_control" 
                        placeholder="" 
                        type="text" 
                        name='lastName'
                        id='lastname'
                        required
                    /> 
                    <label for="lastName">Last Name</label>
                </div>
                <div className="floating-label">
                    <input 
                        className="contact_control" 
                        placeholder="" 
                        type="email" 
                        name='email'
                        id='email'
                        required 
                    /> 
                    <label for="email">Email</label>
                </div>
                <div className="floating-label">
                    <InputMask 
                        className="contact_control"
                        placeholder=""
                        mask="(999)-999-9999" // La máscara "99999" permite solo 5 dígitos
                        maskChar="" // Esto elimina los caracteres de la máscara que no están ocupados
                        type="text" // Cambia el tipo a "text" para evitar que los navegadores muestren los controles de incremento/decremento
                        name="phoneNumber"
                        id="phone-Number"
                        required
                    />               
                    <label for="phone-Number">Phone Number</label>   
                </div>
                <div className="floating-label ">
                    <input 
                        className="contact_control" 
                        placeholder="" 
                        type="text" 
                        name='address'
                        id='address'
                        required
                    /> 
                    <label for="address">Address</label>
                </div>
                <div className="floating-label ">
                    <input 
                        className="contact_control" 
                        placeholder="" 
                        type="text" 
                        name='city'
                        id='city'
                        required
                    /> 
                    <label for="city">City</label>
                </div>
                <div className="floating-label ">
                    <input 
                        className="contact_control" 
                        placeholder="" 
                        type="text" 
                        name='state'
                        id='stateName'
                        required
                    /> 
                    <label for="stateName">State</label>
                </div>
                <div className="city-list-container" >
                    
                </div>
                <div className="floating-label ">
                    <InputMask 
                        className="contact_control"
                        placeholder=""
                        mask="99999" // La máscara "99999" permite solo 5 dígitos
                        maskChar="" // Esto elimina los caracteres de la máscara que no están ocupados
                        type="text" // Cambia el tipo a "text" para evitar que los navegadores muestren los controles de incremento/decremento
                        name="zipcode"
                        id="zipcode"
                        required
                    /> 
                    <label for="zipcode">Zip Code</label>
                </div>
                <div className="floating-label">
                    <div>
                        <textarea 
                            className="textarea" 
                            id = "message" 
                            placeholder="Message" 
                            type="type" 
                            
                        />
                        
                    </div>
                </div>
                <div>
                    <label style={{display:'flex',alignItems:'center',alignContent:"baseline", flexDirection: 'row'}}>
                        Recommended:
                        <select 
                            className='floating-label'
                            name="recommendedBy" 
                            id="recommendedBy"
                            placeholder='Select'
                            defaultValue="Friend" 
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
                <div className="col-md-12">
                    <button 
                            className="send_btn"
                            type='submit'
                            value='send'
                            onClick={handleOnClick}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}
