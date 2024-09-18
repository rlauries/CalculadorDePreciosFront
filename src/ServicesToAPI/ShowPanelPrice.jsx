import React from 'react'
import { useContext } from 'react';
import { useCallback } from 'react';
import { useEffect} from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';



export const ShowPanelPrice = ({ fenceModel}) => {
    
  
    let {panelPrice, setPanelPrice} = useContext(PriceContext);
    let url = 'https://localhost:7142/api/price/PanelPrice';

    const fetchInfo = useCallback(() => {
      let responses = axios
          .post(url, fenceModel)
          .then((response) => {
              setPanelPrice(response.data);
          })
          .catch(error => {setPanelPrice(0)});
      console.log(responses);
      return responses;
    }, [url, fenceModel, setPanelPrice]);
  
    useEffect(() => {
        fetchInfo();
    }, [url, fetchInfo]);

  return (
    <div>{panelPrice.toFixed(2)}</div>
    
        
  )
}

