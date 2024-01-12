import React, { useState } from 'react'
import { createContext } from "react";

//Crear el contexto
export const PriceContext = createContext();

//crear el provider con values globales

export function PriceProvider ({children}) 
{
    const [price, setPrice] = useState(0);
  
    return (
    <PriceContext.Provider value={{
         price,
         setPrice
    }}>
        {children}
    </PriceContext.Provider>    
  )
}
