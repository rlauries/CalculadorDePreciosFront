import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom-v5-compat";

import "./ContactUsForm.css";
import { UploadFile } from "../UploadFile/UploadFile.jsx";
import FloatingLabelInput from "../FloatingLabelInput/FloatingLabelInput.jsx";
import validationPatterns from "../../gobernance/validationPatterns.js";

type FormDataState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormDataState, string>>;

export const ContactUsForm: React.FC = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [thankYouName, setThankYouName] = useState<string | null>(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const validateField = (name: keyof FormDataState, value: string) => {
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

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormDataState;

    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    validateField(fieldName, value);
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validationPatterns.fullName.test(formData.fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    }

    if (!validationPatterns.email.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!validationPatterns.phoneNumber.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number format must be (999)-999-9999.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    if (!validateForm()) return;
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    try {
      await emailjs.send(
        
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          additionalInformation: formData.message || "",
          reply_to: formData.email,
          fileName: selectedFile?.name || "No file attached"
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      setThankYouName(formData.fullName);

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });

      setSelectedFile(null);
    } catch (err) {
      console.error("EmailJS submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const closeModal = () => {
    setThankYouName(null);
    navigate("/home");
  };

  return (
    <div className="viewport">
      <div>
        <legend className="legenda-lead-form">
          Contact Us<strong>&nbsp; | </strong>
        </legend>
      </div>

      <div className="lead-form">
        <FloatingLabelInput
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          onBlur={handleBlur}
          error={errors.fullName}
          required={true}
        />

        <FloatingLabelInput
          label="Email"
          name="email"
          type="text"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
          onBlur={handleBlur}
          error={errors.email}
          required={true}
        />

        <div className="floating-label">
          <InputMask
            className="contact_control"
            placeholder=""
            mask="(999)-999-9999"
            maskChar=""
            type="text"
            name="phoneNumber"
            id="phone-Number"
            value={formData.phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData(prev => ({
                ...prev,
                phoneNumber: e.target.value
              }))
            }
            onBlur={handleBlur}
            required
          />

          <label htmlFor="phone-Number">
            Phone Number<strong>(required)</strong>
          </label>

          {errors.phoneNumber && (
            <p className="form-error">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="floating-label">
          <textarea
            className="textarea"
            id="message"
            placeholder="Additional Information"
            name="message"
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData(prev => ({
                ...prev,
                message: e.target.value
              }))
            }
          />
        </div>

        <div className="upload-row">
          <UploadFile onFileSelected={setSelectedFile} />
        </div>

        <div className="reCaptcha-wrapper">
          <ReCAPTCHA
            sitekey="6LeGCy0rAAAAAGhvUg1wD3izevLwkwW56goISaFY"
            onChange={handleCaptchaChange}
            size="compact"
          />
        </div>

        <button
          className="send_btn"
          type="submit"
          value="send"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>

      {thankYouName && (
        <div
          className="modal-overlay-contactus-form"
          onClick={() => setThankYouName(null)}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>
              Thank you, {thankYouName} <strong> ! </strong>
            </h2>
            <p>
              We've received your information. Our team will be in touch shortly.
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};