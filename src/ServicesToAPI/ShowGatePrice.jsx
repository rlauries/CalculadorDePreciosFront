import React from 'react'
import { useContext} from 'react';
import { useCallback } from 'react';
import { useEffect} from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';



export const ShowGatePrice = ({url}) => {
  
    const {gatePrice, setGatePrice} = useContext(PriceContext);
    
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
        setGatePrice(0);
        return;
      }

      return await axios
              .get(url, {headers})
              .then((response) => {
                if(!isNaN(response.data)){
                  setGatePrice(response.data)
                }
                else
                {setGatePrice(0)};
              })
              .catch(error => {
                console.error("❌ API request failed:", error);
                setGatePrice(0);
              });
    }, [url, setGatePrice])

    useEffect(() => {
      fetchInfo();
    }, [fetchInfo]);

  return (
    <div>{gatePrice.toFixed(2)}</div>
    
        
  )
}

