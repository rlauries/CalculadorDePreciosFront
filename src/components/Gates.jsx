import React from 'react'
import { ShowGatePrice } from '../api/ShowGatePrice';
import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';
import { Box } from '@mui/material';

export const Gates = () => {

    const {urlGate, setUrlGate} = useContext(PriceContext);
  
    function handleGatesUrlOnChange(e){
        let numeroDePuertas = e.target.value;
        if(numeroDePuertas >= 0){
          let url = `https://localhost:7156/api/precio/puerta/${numeroDePuertas}`;
          setUrlGate(url);
          
        } 
        else{
          numeroDePuertas = 0;
          e.value = 0;
        }
       
        
      } 
      

  return (
    <fieldset>
        <Box sx={{
                marginLeft: 4,
                border: 1,
                padding: 2,
                display: 'flex', 
                flexDirection:'column',
                justifyContent: 'space-evenly',
                
            } } >
            <label >Enter Number of Gates:
                <input 
                    type="number" 
                    id='numberOfGatesInput'
                    onChange={handleGatesUrlOnChange }
                />
            </label>
            <button id='showGatePrice'>
                Gate Price is: <ShowGatePrice url={urlGate}/>
            </button>
            
        </Box>        

    </fieldset>  

  )
}
