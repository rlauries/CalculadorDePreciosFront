import React, { useContext } from 'react'

import { Box} from '@mui/material';

import { Header } from '../Layouts/Header';
import { Footer } from '../Layouts/Footer';

import { PriceContext } from '../../context/PriceContext';
import { TaxForm } from '../../ServicesToAPI/TaxForm';
import { ShowPanelPrice } from '../../ServicesToAPI/ShowPanelPrice';
import { Gates } from '../../ServicesToAPI/Gates';
import FenceModelForAPI from '../../Models/FenceModelForAPI';
import '../../Style-components/MyStyle.css';

export const ChainLinkFence = () => {

  let {taxRate, panelObject, setPanelObject, gatePrice, panelPrice, urlPanel} = useContext(PriceContext);
  
  function handleSqureFeetUrlOnChange(e){
    let sFeet = e.target.value;
    
    if(sFeet >= 0){
      panelObject = new FenceModelForAPI(1,sFeet,0,0,0 );
      setPanelObject(panelObject);
    }
    else
    {
      sFeet = 0;
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
               id= "chainLink-container"
      >
          <img src="images/chainlinkfence.jpg" alt="" />
          <fieldset className='containerInside'>
                
                    <Box sx={{display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start", 
                              width:'100%' 
                            }}>
                        
                      
                        <div className='dinamic-form' >
                            <div>
                                <label type='text' className='Legenda' id='chainLinkLabel'>Chain Link</label>
                            </div>
                            <div className='sqFeet-row' 
                                 style={{
                                    display: 'flex',
                                    flexDirection:'row',
                                    justifyContent: 'left', 
                                    alignItems:'center',
                                    
                                 }}>
                                <label>Square Feet:
                                  <input className='sqFeet' 
                                      id='sqFeetInput'
                                      placeholder='0'
                                      type="number" 
                                      name='sqFeet'
                                      style={{flexGrow: 1}}
                                      onChange={handleSqureFeetUrlOnChange}
                                  />
                                </label>
                                <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
                                <span style={{ marginLeft:'10px' }}>
                                    Panel Price: $&nbsp;<b className="bold-text"><ShowPanelPrice url={urlPanel} fenceModel={panelObject}/></b>
                                </span>
                                
                            </div>                        
                            <div >
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
                                <span className='totalPrice' >
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
