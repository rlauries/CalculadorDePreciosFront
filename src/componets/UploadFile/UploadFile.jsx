import React, { useState } from "react";
import '../ContactUsForm/Contactus.css';

export const UploadFile = ({onFileSelected}) => {
  
    
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
      const selected = e.target.files[0];
      setFile(selected);             // actualiza el estado visual
      if (selected) {
          onFileSelected(selected);  // usa la variable local inmediatamente
      }
  };
  

    

    return (
      <>
        
        <div className="file-row">
            <input className='contact_control' 
                    type="file" 
                    id="fileInput" 
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={onFileChange} />
            <label htmlFor="fileInput" className="custom-file-label">Upload your Architeture Plans or Sketch</label>
            <div className="chosen-file">
              {file && <p><b>Selected file:</b> {file.name}</p>}
            </div>
            
        </div>
      </> 
  )
}
