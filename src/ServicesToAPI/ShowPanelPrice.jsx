import React from 'react'
import { useContext } from 'react';
import { useCallback } from 'react';
import { useEffect} from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';



export const ShowPanelPrice = ({ fenceModel}) => {
    
  
    let {panelPrice, setPanelPrice} = useContext(PriceContext);
    let url = 'https://localhost:7142/api/price/PanelPrice';
    
    const token = localStorage.getItem("token");
    const headers = token
      ? {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      }
      : null;

    const fetchInfo = useCallback(async () => {
      if (!headers) {
          console.error("⚠️ No token found, skipping API request.");
          setPanelPrice(0);
          return;
      }

      try {
         const response = await axios.post(url, fenceModel, {headers})
         setPanelPrice(response.data);
      } catch (error) {
          console.error("⚠️ API request failed:", error);
          setPanelPrice(0);
      }
    }, [url, fenceModel, setPanelPrice]);
  
    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

  return (
    <div>{panelPrice.toFixed(2)}</div>
        
  )
}

