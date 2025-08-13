import React from 'react';
import './FloatingLabelInput.css';

const FloatingLabelInput = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  required,
}) => {
  return (
    <div className="floating-label">
      <input
        className="contact_control"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=""
        required={required}
      />
      <label htmlFor={name}>
        {label} <strong>{required && '(required)'}</strong>
      </label>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default FloatingLabelInput;
