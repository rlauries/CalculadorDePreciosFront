
import React, { useState } from 'react'

import FloatingLabelInput from '../../../../componets/FloatingLabelInput/FloatingLabelInput';
import './Login.css';
import validationPatterns from '../../../../gobernance/validationPatterns.js';



const Login = () => {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const handleBlur = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      validateField(name, value); // ← Valida en el blur
    };
    const validateField = (name, value) => {
      let error = "";
      if (name === "email" && !validationPatterns.email.test(value)) {
        error = "Invalid email address.";
      }
      if (name === "password" && value.length < 6) {
        error = "Password must be at least 6 characters long.";
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };    

    const validateForm = () => {
      const newErrors = {};
        if(!validationPatterns.email.test(formData.email))
            newErrors.email = 'Invalid email address.';
        if(formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters long.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);

        }
        catch (error) {
            console.error("Login error:", error);
        }    
      }
        
    };

    return (
        <div>
            
            <div className='login-form'>
                 <div className='legend-div'>
                    <img className='logo-img' src="images\Logo\lauries logo (para fondo blanco).png" alt="" />
                    <legend className='legenda-lead-form'>
                        Login<strong>&nbsp; | </strong>
                    </legend>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className='lead-form'>
                        {/* Email */}
                        <FloatingLabelInput
                            label="Email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onBlur={handleBlur}
                            error={errors.email}
                            required={true}
                        />
                        {/* Password */}
                        <FloatingLabelInput
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            onBlur={handleBlur}
                            error={errors.password}
                            required={true}
                        />
                        <button type="submit" 
                                className='send_btn'
                                onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;