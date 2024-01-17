import React from 'react'
import { useContext } from 'react';

import { useEffect, useState } from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export const ShowPanelPrice = ({url}) => {
  
  
    const {panelPrice, setPanelPrice} = useContext(PriceContext);
    //const [price, setPrice] = useState(0);

    const fetchInfo = () => {
        return axios.get(url, config)
                .then((response) =>{setPanelPrice(response.data)})
                .catch(error => {setPanelPrice("Error:" + error)});
    }

    useEffect(() => {
        fetchInfo();
    }, [url])

  return (
    <div>{panelPrice}</div>
    
        
  )
}

