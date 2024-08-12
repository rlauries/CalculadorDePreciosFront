import React from 'react'
import { ShowGatePrice } from './ShowGatePrice';
import { useContext } from 'react';
import { PriceContext } from '../context/PriceContext';
import '../Style-components/MyStyle.css';
import '../Style-components/InsideFenceStyles.css'


export const Gates = () => {

    const {urlGate, setUrlGate} = useContext(PriceContext);
  
    function handleGatesUrlOnChange(e){
        let numeroDePuertas = e.target.value;
        if(numeroDePuertas >= 0){
          let url = `https://localhost:7142/api/Gates/StandardDoor/${numeroDePuertas}`;
          setUrlGate(url);
          
        } 
        else{
          numeroDePuertas = 0;
          
        }
       
        
      } 
  

  return (
    
        <div className="flex-container"  
        >
            <label className='gate-row'>Enter Gates:
                <input 
                    type="number" 
                    id='numberOfGatesInput'
                    placeholder='0'
                    style={{padding: '0, 50px'}}
                    onChange={handleGatesUrlOnChange }
                />
            </label>
            <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
             <span >
                Gate Price: $ &nbsp;
                <b className="bold-text" >
                  {<ShowGatePrice url={urlGate}/>}
                </b>
            </span>
            
        </div>        

    

  )
}
