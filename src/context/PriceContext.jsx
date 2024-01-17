import React, { useState } from 'react'
import { createContext } from "react";

//Crear el contexto
export const PriceContext = createContext();

//crear el provider con values globales

export function PriceProvider ({children}) 
{
    const [panelPrice, setPanelPrice] = useState(0);
    const [gatePrice, setGatePrice] = useState(0); 

    const [urlFence, setUrlFence] = useState(0);
    const [urlGate, setUrlGate] = useState(0);
  
    return (
    <PriceContext.Provider value={{
         panelPrice, setPanelPrice,
         gatePrice, setGatePrice,
         urlFence,setUrlFence,
         urlGate, setUrlGate
         
    }}>
        {children}
    </PriceContext.Provider>    
  )
}
