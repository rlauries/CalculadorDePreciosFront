
import React from 'react'
import { Footer} from '../Layouts/Footer'
import { Header} from '../Layouts/Header';


import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import '../../Style-components/Login.css';
import {useNavigate } from 'react-router-dom-v5-compat';

export const Login = () => {
    const navigate = useNavigate();
        
    const regex = {
        username : /^[a-zA-Z0-9]+$/,
        password : /^.{4,16}$/,
    }
    const inputsValidated = {
        username : false,
        password : false,
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

    const resetForm = () => {
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        inputsValidated.username = false;
        inputsValidated.password = false;
        
    }
    const validateForm = (e) => {
        e.preventDefault();
        
        if(inputsValidated.username 
            && inputsValidated.password 
           )
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
    const submitForm = async () => {
        
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let url = 'https://localhost:7142/api/User/Login';
        
        try {
            
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
            });

            if(!response.ok) throw new Error('Login Failed');

            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            console.log(data.token);
            console.log("Login successful, token saved");
            navigate("/home");
        } catch (error) {
            console.error("Wrong Username or Password", error);
        }


        
    }
    return (
        <div className="viewport">
            <Header/>
            <section className='loginContainer'>
                <form action="" className="loginForm">
                    <div>
                        <label type='text' className='legend' >Login</label>

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
        </div>
    )


}