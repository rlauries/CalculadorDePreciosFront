import React, {useContext } from 'react'

import { Box } from '@mui/material';


import { PriceContext } from '../../context/PriceContext';

import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';

import { Gates } from '../../ServicesToAPI/Gates';
import { ShowPanelPrice } from '../../ServicesToAPI/ShowPanelPrice';
import { TaxForm } from '../../ServicesToAPI/TaxForm';
import FenceModelForAPI from '../../Models/FenceModelForAPI';
import '../../Style-components/MyStyle.css';

 


export const DuraFence = () => {
  
  let {taxRate, panelObject, setPanelObject, gatePrice, panelPrice, urlPanel} = useContext(PriceContext);
  
  function handleSqFeetOnChange(e)
  {
    let sFeet = e.target.value;
    let horizonTubesValue = document.getElementById('selectHorizontalRow').value;
    if(sFeet >= 0){  
      panelObject = new FenceModelForAPI(2,sFeet,horizonTubesValue,0,0 );
      setPanelObject(panelObject);
    }
       
  }
  function handleHorizantalRowOnChange(e){
    let sFeet = document.getElementById('sqFeetInput').value;
    let horizonTubesValue = e.target.value;
    if(sFeet >= 0){  
      panelObject = new FenceModelForAPI(2,sFeet,horizonTubesValue,0,0 );
      setPanelObject(panelObject);
    }
  }


  const totalPrice = () =>{
    let totalPrice = (gatePrice + panelPrice + (panelPrice + gatePrice) * taxRate /100).toFixed(2);
    return totalPrice;
  };

  return (
    <>
      <Header/>
      <section className="background-container" 
               id= "duraFence-container" 
        
      >
          <img src="images/durafence.jpg" alt="" />
          <fieldset className='containerInside'>
            <label type='text' className='Legenda'>Dura Fence</label>
                      
            <Box sx={{ display: 'flex', flexDirection: 'row'   }}>
                
                  <div className='dinamic-form' >
                        <div>
                          <label type='text' className='Legenda' id='duraFence'>Dura Fence</label>
                        </div>
                        <div className='sqFeet-select-span'>
                          <div className='sqFeet-select'>    
                            <label>Square Feet:
                                <input className='sqFeet'
                                    id='sqFeetInput'
                                    placeholder='0'
                                    type="number" 
                                    name='sqFeet'
                                    required 
                                    onChange={handleSqFeetOnChange}
                                    style={{flexGrow: 1}}
                                        
                                />
                            </label>
                          
                            <label className='selector'>Select Rows:&nbsp;
                              <select className='select-horizontal'
                                      id='selectHorizontalRow'
                                    onChange={handleHorizantalRowOnChange} 
                                        
                              >
                                <option value="2">2 Tubes</option>
                                <option value="3">3 Tubes</option>                              
                              </select>
                            </label>
                          </div> 
                          <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
                          <div> 
                            <span style={{ marginLeft:'10px' }}>
                                Panel Price: $&nbsp;<b className="bold-text"><ShowPanelPrice url={urlPanel} fenceModel={panelObject}/></b>
                            </span>
                          </div>
                        </div>      
                      <div  >
                        <Gates/>
                      </div>
                      <div>
                        <TaxForm/>
                      </div>
                      <div className='lastSection'>
                        <div className="buttons">
                          <button className='getQuoteButton' onClick={()=>window.location.href = "/service"}>Return</button>
                          <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                        </div>
                        <span className='totalPrice'>
                            Total Price : $&nbsp;<b className="bold-text" >{totalPrice()}</b>
                        </span>
                      </div>
                      
                  </div>
                  
            </Box>

            
            
          
        </fieldset>
        
                              
      </section>
      <Footer/>
    </>     
          

  )
}
