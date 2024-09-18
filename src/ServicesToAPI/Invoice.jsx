import axios from "axios";
import React, {useCallback, useContext, useEffect } from 'react';
import { PriceContext } from '../context/PriceContext';

export const Invoice = () => {

    const {invoiceModel } = useContext(PriceContext); // Using context inside component
    let url = 'https://localhost:7142/api/Invoice/download';
    
    const fetchInvoice = useCallback (() => {
        let responses =  axios
                            .post(url, invoiceModel)
                            .then((response) => {
                                alert('Your invoice is ready');
                            })
                            .catch((error) => {
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
