// validationPatterns.js

const validationPatterns = {
    // Solo letras y números, sin espacios ni símbolos
    username: /^[a-zA-Z0-9]+$/,
  
    // Cualquier carácter, mínimo 4 y máximo 16 caracteres
    password: /^.{4,16}$/,
  
    // Solo dígitos numéricos
    customerId: /^\d+$/,
  
    // Solo letras (mayúsculas y minúsculas), permite espacios entre palabras, no acepta números ni símbolos
    fullName: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
    
    // Teléfono con máscara (999)-999-9999 (14 caracteres incluyendo paréntesis y guiones)
    phoneNumber: /^\(\d{3}\)-\d{3}-\d{4}$/,
    //para emails
    email: /\S+@\S+\.\S+/

  };
  
  export default validationPatterns;
  