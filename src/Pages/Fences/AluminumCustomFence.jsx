import React, { useState, useContext } from 'react'

import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';

import { TaxForm } from '../../ServicesToAPI/TaxForm';

import { ShowPanelPrice } from '../../ServicesToAPI/ShowPanelPrice';
import { PriceContext } from '../../context/PriceContext'; 
import { Gates } from '../../ServicesToAPI/Gates';
import FenceModelForAPI from '../../Models/FenceModelForAPI';




export const AluminumCustomFence = () => {

  let {taxRate, panelObject, setPanelObject, gatePrice, panelPrice, urlPanel} = useContext(PriceContext);
  
  
  

  function sqFeetOnChangeHandler(e)
  {
      let sFeet = e.target.value;
      let tubeSize = document.getElementById('selectTubeWide').value;
      let gap = document.getElementById('selectGap').value;
      if(sFeet >= 0){  
        panelObject = new FenceModelForAPI(3,sFeet,0,tubeSize,gap );
        setPanelObject(panelObject);
      }
  }

  function horizontalOnChangeHandler(e)
  {
     let sFeet = document.getElementById('sqFeet').value;
     let tubeSize = e.target.value;
     let gap = document.getElementById('selectGap').value;
     if(sFeet >= 0){  
      panelObject = new FenceModelForAPI(3,sFeet,0,tubeSize,gap );
      setPanelObject(panelObject);
    }
  }

  function GapOnChangeHandler(e){
     let sFeet = document.getElementById('sqFeet').value;
     let tubeSize = document.getElementById('selectTubeWide').value;
     let gap = e.target.value;
     if(sFeet >= 0){  
      panelObject = new FenceModelForAPI(3,sFeet,0,tubeSize,gap );
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
              id= "aluminumCustom-container"
       >
          <img src="images/aluminumcustomfence.jpg" alt="" />
          <fieldset className='containerInside'>  
                    
              <div  className='dinamic-form' >
                  <div>
                    <label type='text' className='Legenda'>Aluminum Custom </label>
                  </div>
                  <div className='sqFeet-select-span'>
                          <div className='sqFeet-select'>
                              <label >Square Feet: 
                                <input 
                                  id='sqFeet'
                                  type="number"
                                  placeholder='0'
                                  onChange={sqFeetOnChangeHandler}
                                />
                                
                              </label>
                              
                              <label className='selector'>Tube Size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <select className='select-horizontal-Tube-size'
                                        id='selectTubeWide'
                                        onChange={horizontalOnChangeHandler} 
                                >
                                  <option value="2">2" x 1"</option>
                                  <option value="4">4" x 1"</option>                              
                                </select>
                              </label>  
                              
                              <label className='selector'>Tube Gap:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <select className='select-gap'
                                        id='selectGap'
                                      onChange={GapOnChangeHandler}  
                                >
                                  <option value="0">0</option>
                                  <option value="1">1 inch</option>
                                  <option value="2">2 inches</option>
                                  <option value="3">3 inches</option>    
                                  
                                </select>
                              </label> 
                          </div>   
                          <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
                          <div> 
                              <span >
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
              
        </fieldset>
        
          
      </section>
      <Footer/>

  </>  
    
  )
}
