import React, {useState} from 'react';

import InputMask from 'react-input-mask';
import './ContactUsForm.css';
import { UploadFile } from '../UploadFile/UploadFile.jsx';
import ReCAPTCHA from "react-google-recaptcha";
import validationPatterns from '../../gobernance/validationPatterns.js';
import { useNavigate } from 'react-router-dom-v5-compat';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput.jsx';

export const ContactUsForm = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const [thankYouName, setThankYouName] = useState(null);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
    
    const handleBlur = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      validateField(name, value); // ← Valida en el blur
    };
    
    const validateField = (name, value) => {
      let error = "";
    
      if (name === "fullName" && !validationPatterns.fullName.test(value)) {
        error = "Name must contain only letters and spaces.";
      }
    
      if (name === "email" && !validationPatterns.email.test(value)) {
        error = "Invalid email address.";
      }
    
      if (name === "phoneNumber" && !validationPatterns.phoneNumber.test(value)) {
        error = "Phone number format must be (999)-999-9999.";
      }
    
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };
    
    
    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };
    
    const validateForm = () => {
      const newErrors = {};
      if (!validationPatterns.fullName.test(formData.fullName))
        newErrors.fullName = 'Full name must contain only letters and spaces.';
  
      if(!validationPatterns.email.test(formData.email))
        newErrors.email = 'Invalid email address.';
  
      if (!validationPatterns.phoneNumber.test(formData.phoneNumber))
        newErrors.phoneNumber = 'Phone number format must be (999)-999-9999.';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!captchaValue) {
        alert("Please complete the CAPTCHA.");
        return;
      }
    
      if (validateForm()) {
        
        try {
          const formDataToSend = new FormData();
          formDataToSend.append("fullName", formData.fullName);
          formDataToSend.append("email", formData.email);
          formDataToSend.append("phoneNumber", formData.phoneNumber);
          formDataToSend.append("additionalInformation", formData.message || "");
          if (selectedFile) {
            formDataToSend.append("file", selectedFile); // ← archivo real
          }

          console.log("Archivo seleccionado:", selectedFile);
          const response = await fetch("https://localhost:7142/api/lead/submit", {
            method: "POST",
            body: formDataToSend,
          });

          
    
          if (!response.ok) throw new Error("Failed to submit lead");
    
          const result = await response.json();
          setThankYouName(result.fullName);
    
        } catch (err) {
          console.error("Submission error:", err);
        }
      }
    };
    const closeModal = () => {
      setThankYouName(null);
      navigate("/home");
    }
    
  

  return (
    <div className='viewport'>
        <div>
          <legend className='legenda-lead-form'>
            Contact Us<strong>&nbsp; | </strong>
          </legend>
        </div>
        <div className="lead-form">
            {/* FullName */}
            <FloatingLabelInput
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              onBlur={handleBlur}
              error={errors.fullName}
              required={true}
            />
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
            {/* Phone Number */}
            <div className="floating-label">
                <InputMask 
                    className="contact_control"
                    placeholder=""
                    mask="(999)-999-9999" // La máscara "99999" permite solo 5 dígitos
                    maskChar="" // Esto elimina los caracteres de la máscara que no están ocupados
                    type="text" // Cambia el tipo a "text" para evitar que los navegadores muestren los controles de incremento/decremento
                    name="phoneNumber"
                    id="phone-Number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                    }
                    onBlur={handleBlur}
                    required
                />               
                <label for="phone-Number">Phone Number<strong>(required)</strong></label>
                {errors.phoneNumber && <p className="form-error">{errors.phoneNumber}</p>}   
            </div>
                {/* Text Area */}
            <div className="floating-label">
                <div>
                    <textarea 
                        className="textarea" 
                        id = "message" 
                        placeholder="Addicional Information" 
                        type="type" 
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                    />
                    
                </div>
            </div>

             {/* Upload File */}
              <div className="upload-row">
                <UploadFile onFileSelected={setSelectedFile} />
              </div>

              {/* ReCaptcha */}
              <div className="reCaptcha-wrapper">
                <ReCAPTCHA
                  sitekey="6LeGCy0rAAAAAGhvUg1wD3izevLwkwW56goISaFY"
                  onChange={handleCaptchaChange}
                  size="compact"          // hace el captcha más estrecho
                />
              </div>


              {/* SubmitButton*/}
            <button 
                className="send_btn"
                type='submit'
                value='send'
                onClick={handleSubmit}
            >
                Send
            </button>
        </div>
        {thankYouName && (
          <div className="modal-overlay-contactus-form" onClick={() => setThankYouName(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Thank you, {thankYouName} <strong> ! </strong></h2>
              <p>We've received your information. Our team will be in touch shortly.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
        
    </div>
  )
}
