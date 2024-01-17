import React from 'react'
import { useContext } from 'react';

import { useEffect, useState } from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export const ShowGatePrice = ({url}) => {
  
  
    const {gatePrice, setGatePrice} = useContext(PriceContext);
    //const [price, setPrice] = useState(0);

    const fetchInfo = () => {
        return axios.get(url, config)
                .then((response) =>{setGatePrice(response.data)})
                .catch(error => {setGatePrice("Error:" + error)});
                
    }

    useEffect(() => {
        fetchInfo();
    }, [url])

  return (
    <div>{gatePrice}</div>
    
        
  )
}

