import React from 'react'
import { Footer} from '../Layouts/Footer'
import { Header} from '../Layouts/Header';
import axios from "axios";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import '../../Style-components/SignUp.css';

import SignUpForAPI from '../../Models/SignUpForAPI';
import { FetchSignUp } from '../../ServicesToAPI/FetchSignUp';

export const SignUp = () => {

    const regex = {
        username : /^[a-zA-Z0-9]+$/,
        password : /^.{4,16}$/, 
        customerId : /^\d+$/
    }
    const validateInput = (e) => {
        const {name, value} = e.target;
        const expresionPattern = regex[name];
        if(expresionPattern.test(value)){
            document.getElementById(`${name}_group`)
                    .classList
                    .remove('form-group-wrong');
            document.getElementById(`${name}_group`)
                    .classList
                    .add('form-group-right'); 
            document.querySelector(`#${name}_group .form-input-error`)
                    .classList
                    .remove('form-input-error-active'); 
            inputsValidated[name] = true;     
        }
        else{
            document.getElementById(`${name}_group`)
                    .classList
                    .add('form-group-wrong');
            document.getElementById(`${name}_group`)
                    .classList
                    .remove('form-group-right');
            document.querySelector(`#${name}_group .form-input-error`)
                    .classList
                    .add('form-input-error-active');                  
            inputsValidated[name] = false;                                                
        }
    }
    
    const validatePassword2 = () => {
        const inputPassword = document.getElementById('password').value;
        const inputPassword2 = document.getElementById('password2').value;
        
        
        if(inputPassword === inputPassword2){
            inputsValidated.password2 = true; 
            document.getElementById(`password2_group`)
                    .classList
                    .remove('form-group-wrong');
            document.getElementById(`password2_group`)
                    .classList
                    .add('form-group-right');
        }
        else{
            inputsValidated.password2 = false;
            document.getElementById(`password2_group`)
                    .classList
                    .add('form-group-wrong');
            document.getElementById(`password2_group`)
                    .classList
                    .remove('form-group-right');
        }
    }
    const validateForm = (e) => {
        e.preventDefault();
        const termsCondition = document.getElementById('terms');
        
        if(inputsValidated.username 
            && inputsValidated.password 
            && inputsValidated.password2
            && inputsValidated.customerId 
            && termsCondition.checked)
        {
            //Validate with Css Inputs
            document.getElementById('form-message-succeed')
                    .classList
                    .add('form-message-succeed-activo');
            document.getElementById('form-message-error')
                    .classList
                    .remove('form-message-error-active');
            document.getElementById('form-message-error')
                    .classList.remove('form-message-error-activo');
                    
            setTimeout(() => {
                document.getElementById('form-message-succeed')
                        .classList
                        .remove('form-message-succeed-activo');
            },5000);
            submitForm();  
            resetForm();         
        }
        else{
            document.getElementById('form-message-error')
                    .classList.add('form-message-error-activo');
            setTimeout(() => {
                document.getElementById('form-message-error')
                        .classList
                        .remove('form-message-error-activo');
            },5000);
                    
        }
    }
    const submitForm = () => {
        
        //Create Objects
        let userName = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let customerId = document.getElementById('customerId').value;
        let myUser = new SignUpForAPI(userName, password, customerId);
        //fetch the EndPoint
        let url = 'https://localhost:7142/api/User/SignUp';
        let responses = axios
                        .post(url, myUser)
                        .then((response) => {
                            
                            const UserName = response.data;
                            alert(`Congratulation ${UserName} your username and password have been added`);
                        })
                        .catch((error)=>{console.error('Error en la solicitud:', error);}); 

    }
    const inputsValidated = {
        username : false,
        password : false,
        password2 : false,
        customerId : false
    }
    const resetForm = () => {
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        document.getElementById('password2').value = "";
        document.getElementById('customerId').value = "";
        inputsValidated.username = false;
        inputsValidated.password = false;
        inputsValidated.password2 = false;
        inputsValidated.customerId = false;
    }


  return (
    <>
        <Header/>
        <section className='signUpContainer'>
            <img src="images/Signup.jpg" alt="" />
            <form action="" className='signUpForm' id='signUpForm'>
                <div>
                    <label type='text' className='legenda' >Sign up</label>
                </div>
                {/* Group: Username */}
                <div className='form-group' id='username_group'>
                    <label className='form-label' for="username">Username</label>
                    <div className='form-group-input'>
                        <input 
                            className="form-input" 
                            placeholder="" 
                            type="text" 
                            name='username'
                            id='username'
                            onChange={validateInput}
                            required
                        />
                        <HighlightOffIcon 
                            className='form-validation-icon times'
                        />
                        <CheckCircleOutlineIcon className='form-validation-icon checked'/>
                    </div>
                    <p className='form-input-error'>  
                            Your username must be between 4 and 16 characters long 
                            and can only contain letters and numbers. 
                    </p>
                </div>
                {/* Group: Password */}
                <div className='form-group' id='password_group'>
                    <label className='form-label' for="password">Password</label>
                    <div className='form-group-input'>
                        <input 
                            className="form-input" 
                            placeholder="" 
                            type="text" 
                            name='password'
                            id='password'
                            onChange={validateInput}
                            required
                        />
                        <HighlightOffIcon className='form-validation-icon times'/>
                        <CheckCircleOutlineIcon className='form-validation-icon checked'/>
                    </div>
                    <p className='form-input-error'>  
                        Your password must be between 4 and 16 characters 
                    </p>
                </div>
                {/* Group: Password2 */}
                <div className='form-group' id='password2_group'>
                    <label className='form-label' for="password2">Re-Enter Password</label>
                    <div className='form-group-input'>
                        <input 
                            className="form-input" 
                            placeholder="" 
                            type="text" 
                            name='password2'
                            id='password2'
                            onChange={validatePassword2}
                            required
                        />
                        <HighlightOffIcon className='form-validation-icon times'/>
                        <CheckCircleOutlineIcon className='form-validation-icon checked'/>
                    </div>
                    <p className='form-input-error'>  
                        Your password must be between 4 and 16 characters
                    </p>
                </div>
                {/* Group: CustomerId */}
                <div className='form-group' id='customerId_group'>
                    <label className='form-label' for="password2">Customer Id</label>
                    <div className='form-group-input'>
                        <input 
                            className="form-input" 
                            placeholder="" 
                            type="text" 
                            name='customerId'
                            id='customerId'
                            onChange={validateInput}
                            required
                        />
                        <HighlightOffIcon className='form-validation-icon times'/>
                        <CheckCircleOutlineIcon className='form-validation-icon checked'/>
                    </div>
                    <p className='form-input-error'>  
                        Your Id must contain only numbers
                    </p>
                </div>
                {/* Group: Terms and Conditions  */}
                <div className='form-group' id='terms-group'>
                    <label className='from-label'>
                        <input 
                            className='form-checkbook' 
                            type="checkbox"
                            id='terms'
                            name='terms' 
                        />
                        You agree to our Terms, Privacy Policy and Cookies Policy. 
                        
                    </label>
                </div>
                {/* Group: Form Button */}
                <div className="form-message-error" id='form-message-error'>
                    <p>
                        <WarningIcon/>
                        <b>Error: </b> Fill up the form correctly
                    </p>
                </div>
                <div className="form-group form-group-btn-sent">
                    <button type='submit' className='form-btn' onClick={validateForm}>
                        Send
                    </button>
                    <p className='form-message-succeed' id='form-message-succeed'>
                        Form sent successfully!
                    </p>
                </div>
            </form>
        </section>
        <Footer/>
        
    </>
  )
}
