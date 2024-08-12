import React from 'react'
import { useContext} from 'react';
import { useCallback } from 'react';
import { useEffect} from 'react';

import axios from "axios";
import { PriceContext } from '../context/PriceContext';

var config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export const ShowGatePrice = ({url}) => {
  
  
    const {gatePrice, setGatePrice} = useContext(PriceContext);
    //const [price, setPrice] = useState(0);

    const fetchInfo = useCallback(() => {
      return axios
              .get(url, config)
              .then((response) => {
                if(!isNaN(response.data)){
                  setGatePrice(response.data)
                }
                else
                {setGatePrice('')};
              })
              .catch(error => {setGatePrice(0)});
    }, [url, setGatePrice])

    useEffect(() => {
      fetchInfo();
    }, [fetchInfo]);

  return (
    <div>{gatePrice.toFixed(2)}</div>
    
        
  )
}

