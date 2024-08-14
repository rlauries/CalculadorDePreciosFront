import React from 'react'
import { useContext } from 'react';

import { useEffect} from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';



export const ShowPanelPrice = ({ fenceModel}) => {
  
  
    let {panelPrice, setPanelPrice, urlPanel} = useContext(PriceContext);
    

    const fetchInfo = () => {
      let responses = axios
          .post(urlPanel, fenceModel)
          .then((response) => {
              setPanelPrice(response.data);
          })
          .catch(error => {setPanelPrice(0)});
      console.log(responses);
      return responses;
    };
  
    useEffect(() => {
        fetchInfo();
    }, [fenceModel]);

  return (
    <div>{panelPrice.toFixed(2)}</div>
    
        
  )
}

