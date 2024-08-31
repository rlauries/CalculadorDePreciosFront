import React from 'react'
import { ShowGatePrice } from './ShowGatePrice';
import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';
import '../Style-components/ServicePriceCard.css';
import '../Style-components/InsideFenceStyles.css'


export const Gates = () => {

    const {urlGate, setUrlGate} = useContext(PriceContext);
  
    function handleGatesUrlOnChange(e){
        let numeroDePuertas = e.target.value;
        if(numeroDePuertas >= 0){
          let url = `https://lauries-estimate-calculator-api-d8gmadfhcvcrdzfv.eastus-01.azurewebsites.net/api/Gates/StandardDoor/${numeroDePuertas}`;
          setUrlGate(url);
          
        } 
        else{
          numeroDePuertas = 0;
          
        }
       
        
      } 
  

  return (
    <div className='gate-row'>
        <label >Enter Gates:
          <input 
              type="number" 
              id='numberOfGatesInput'
              placeholder='0'
              
              onChange={handleGatesUrlOnChange}                                />
        </label>
        <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
        <span className='price' >
          <div className="text-price">
              Gate Price: $ &nbsp;
          </div>
            
            <b className="bold-text" >
              {<ShowGatePrice url={urlGate}/>}
            </b>
        </span>
    </div>

  )
}
