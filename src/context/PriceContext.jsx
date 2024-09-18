import React, { useState } from 'react'
import { createContext } from "react";
import FenceModelForAPI from '../Models/FenceModelForAPI';
import InvoiceModelForAPI from '../Models/InvoiceModelForAPI';

export const PriceContext = createContext();

//crear el provider con values globales

export function PriceProvider ({children}) 
{
  
    const [panelPrice, setPanelPrice] = useState(0);
    const [gatePrice, setGatePrice] = useState(0); 

    const [urlGate, setUrlGate] = useState(0);
    const [numberOfGates, setNumberOfGates] = useState(0);  
    let [panelObject, setPanelObject] = useState(new FenceModelForAPI(1, 0, 0, 0, 0));
    let [invoiceModel, setInvoiceModel] = useState(new InvoiceModelForAPI(panelObject, 0, ''));

    const [taxRate, setTaxRate] = useState(0);
    const [stateName, setStateName] = useState('');
    const [cities, setCities] = useState([]);
    const [clicked, setClicked] = useState(false);
    
    return (
    <PriceContext.Provider value={{
         panelPrice, setPanelPrice,
         gatePrice, setGatePrice,
         urlGate, setUrlGate,
         numberOfGates, setNumberOfGates,
         panelObject, setPanelObject,
         invoiceModel, setInvoiceModel,
         taxRate, setTaxRate,
         stateName, setStateName,
         cities, setCities,
         clicked, setClicked
    }}>
        {children}
    </PriceContext.Provider>    
  )
}
