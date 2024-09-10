import React, { useState } from "react";
import {BlobServiceClient} from '@azure/storage-blob'; 
import '../../Style-components/Contactus.css';

export const UploadFile = () => {
  
    
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]); // Capture the selected file
    };

    // Async function to upload the file

    const UploadFile = async () => {
        try{

            let storagaAccountName = 'lauriesarchitectureplan';
            let sasToken = 'sv=2022-11-02&ss=b&srt=sco&sp=rwdlacyx&se=2024-09-02T05:52:50Z&st=2024-09-01T21:52:50Z&spr=https&sig=A35oLyuykEfzYBBT%2B0nBuAN%2Bq7zexcaX0x57Srk7qi0%3D';
            const blobStorage = new BlobServiceClient(
                `https://${storagaAccountName}.blob.core.windows.net/?${sasToken}`
            );

            // Get container client and create the container if it does not exist

            const containerClient = blobStorage.getContainerClient('myfile');
            await containerClient.createIfNotExists({ access: 'container' });

            // Create a block blob client for the file

            const blobClient = containerClient.getBlockBlobClient(file.name);
            const options = { blobHTTPHeaders: { blobContentType: file.type } };

            // Upload the file to Azure Blob Storage
            await blobClient.uploadBrowserData(file, options);
            alert('File uploaded successfully!');
            setFile(null);
        
        }
        catch (error) {
            alert('Error uploading file:', error);
          }
        
    }; 

    return (
      <>
        
        <div className="file-row">
            <input className='contact_control' type="file" id="fileInput" onChange={onFileChange} />
            <label htmlFor="fileInput" className="custom-file-label">Insert Architectre Plan</label>
            <div className="chosen-file">
              {file && <p><b>Selected file:</b> {file.name}</p>}
            </div>
            <button className="send_btn upload-file" onClick={UploadFile}>Upload File</button>
            
        </div>
      </> 
  )
}
