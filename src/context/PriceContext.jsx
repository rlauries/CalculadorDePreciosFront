import React, { useState } from 'react'
import { createContext } from "react";
import FenceModelForAPI from '../Models/FenceModelForAPI';
import CustomerModelForAPI from '../Models/CustomerModelForAPI';

export const PriceContext = createContext();

//crear el provider con values globales

export function PriceProvider ({children}) 
{
  
    const [panelPrice, setPanelPrice] = useState(0);
    const [gatePrice, setGatePrice] = useState(0); 

    const [urlPanel, setUrlPanel] = useState(`https://localhost:7142/api/price/PanelPrice`);
    const [urlGate, setUrlGate] = useState(0);

    let [panelObject, setPanelObject] = useState(new FenceModelForAPI(1, 0, 0, 0, 0));
    const [taxRate, setTaxRate] = useState(0);
    
    return (
    <PriceContext.Provider value={{
         panelPrice, setPanelPrice,
         gatePrice, setGatePrice,
         urlPanel, setUrlPanel,
         urlGate, setUrlGate,
         panelObject, setPanelObject,
         taxRate, setTaxRate,
         
    }}>
        {children}
    </PriceContext.Provider>    
  )
}
