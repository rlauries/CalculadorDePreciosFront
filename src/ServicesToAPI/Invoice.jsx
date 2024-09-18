import axios from "axios";
import React, {useCallback, useContext, useEffect } from 'react';
import { PriceContext } from '../context/PriceContext';

export const Invoice = () => {

    const {invoiceModel } = useContext(PriceContext); // Using context inside component
    let url = 'https://localhost:7142/api/Invoice/download';
    
    const fetchInvoice = useCallback (() => {
        axios({
            url: url, // API endpoint
            method: 'POST', // HTTP method
            data: invoiceModel, // Send the invoiceModel as payload
            responseType: 'blob' // Set response type to blob (binary data)
        })
        .then((response) => {
            // Create a Blob from the response data
            const file = new Blob([response.data], { type: 'application/pdf' });

            // Create a link element to download the file
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', 'invoice.pdf'); // File name

            // Append link to the body and trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up by removing the link after download
            link.remove();
        })
        .catch((error) => {
            console.error('Error downloading invoice:', error);
            alert('Error');
        });

    }, [url, invoiceModel]);


    useEffect(() => {
        fetchInvoice();
    },[fetchInvoice]);
 
    return (
        <div>
            {/* Button to trigger the fetchInvoice */}
            Your invoice is ready
        </div>
    );
}
