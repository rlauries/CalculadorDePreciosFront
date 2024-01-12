import React, { useContext,createContext } from 'react'
import { useReducer, useState } from 'react';

import { Box } from '@mui/material';
import { ShowPrice } from '../api/ShowPrice';




export const Contador = () => {
  
    const initialState = 0;
    
    
    const [contador, setContador] = useReducer(reducer, initialState);
    const [urlGates, setUrlGates] = useState("");
    
    
  function Sumar() 
  {
    setContador({type:"Increment"})
    
  }
  function Restar() 
  {
    setContador({type:"Decrement"})
    
  }

  function Reset() 
  {
    setContador({type:"Reset"})
    
  }



    
  function reducer(contador, action){
    switch(action.type){
      case "Increment":
        return contador + 1;
      case "Decrement":
        if(contador === 0) return contador;  
        return contador - 1;
    
      case "Reset":
        return initialState;
        

    }
    
    
    return contador;
  }

    

   

 
    function handleRestar(){
      Restar();
      
    }

    const handleSumar = () => {
      Sumar();
      
      
    }
    function handleReset(){
      Reset();
      
      
    }
    function handleGatesPrice(){
      let numeroDePuertas = contador;
      let url = `https://localhost:7156/api/precioTipoDeCerca/puerta/${numeroDePuertas}`;
      setUrlGates(url);
      
      console.log({urlGates});
      
    } 

    return (
      <Box sx={{
            marginLeft: 4,
            border: 1,
            padding: 2,
            justifyContent: 'space-evenly',
            } }
            style={{textAlign:"center"}}
      >
          
          <button onClick={handleRestar}>-</button>
          <button onClick={handleReset}>Reset</button>
          
          <button onClick={handleSumar}>+</button>
          
          <div>
            <input type="text" 
                   textAlign="left" 
                   id='contadorValue'
                   value={contador}  

            />
            
          </div>
          <div>
            <button onClick={handleGatesPrice}>
                Total Door's Price is: {<ShowPrice url = {urlGates}/>}
                
            </button>
          </div>  
      
                
      </Box>
      
    );
  
}
