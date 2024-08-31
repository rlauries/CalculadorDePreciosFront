import React, {useContext } from 'react'

import { Box } from '@mui/material';


import { PriceContext } from '../../context/PriceContext';

import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';

import { Gates } from '../../ServicesToAPI/Gates';
import { ShowPanelPrice } from '../../ServicesToAPI/ShowPanelPrice';
import { TaxForm } from '../../ServicesToAPI/TaxForm';
import FenceModelForAPI from '../../Models/FenceModelForAPI';
import '../../Style-components/ServicePriceCard.css'
import '../../Style-components/DuraFence.css';
import { TotalPrice } from '../../ServicesToAPI/TotalPrice';

 


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

  return (
    <>
      <Header/>
      <section className="background-container" 
               id= "duraFence-container" 
        
      >
          <img src="images/durafence.jpg" alt="" />
          <fieldset className='containerInside'>
          <div className='dinamic-form dura-fence-dinamic-form' >
            <div>
              <label type='text' className='Legenda' id='duraFence'>Dura Fence</label>
            </div>
            <div className='sqFeet-row sqFeet-row-dura-fence'>
              <div className='sqFeet-select dura-fence-select'>    
                <label>Square Feet:
                    <input className='sqFeet'
                        id='sqFeetInput'
                        placeholder='0'
                        type="number" 
                        name='sqFeet'
                        required 
                        onChange={handleSqFeetOnChange}
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
              <span className='price dura-fence-sqfeet-row-price'>
                  <div className='text-price'>Panel Price: $&nbsp;</div>
                  <b className="bold-text">
                    <ShowPanelPrice url={urlPanel} 
                    fenceModel={panelObject}/>
                  </b>
              </span>
            </div>      
            <div>
              <Gates/>
            </div>
            <div>
              <TaxForm/>
            </div>
            <div>
              <TotalPrice/>
            </div>
            <div className='lastSection'>
              <div className="buttons">
                <button className='getQuoteButton' onClick={()=>window.location.href = "/service"}>Return</button>
                <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
              </div>
            </div>
              
          </div>
      
        </fieldset>
                               
      </section>
      
    </>     
          

  )
}
