import React from 'react';
import { useEffect, useCallback, useContext } from 'react';
import { PriceContext } from '../context/PriceContext';
import axios from 'axios';

export const ShowPanelPrice = ({ fenceModel}) => {
    
    let {panelPrice, setPanelPrice} = useContext(PriceContext);
    let url = 'https://localhost:7142/api/price/fencePanelPrice';
    
    const token = localStorage.getItem("token");
    const headers = token
      ? {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      : null;

    const enqueueRequest  = useCallback(async () => {
      if (!headers) {
          console.error("⚠️ No token found, skipping API request.");
          setPanelPrice(0);
          return;
      }

      try {
         await axios.post(url, fenceModel, {headers})
         console.log("✅ Request enqueued successfully. Waiting for SignalR update...");
      } catch (error) {
          console.error("⚠️ API request failed:", error);
          setPanelPrice(0);
      }
    }, [url, fenceModel, setPanelPrice]);
  
    useEffect(() => {
       enqueueRequest();
    }, [enqueueRequest]);


  return null;
        
  
}

