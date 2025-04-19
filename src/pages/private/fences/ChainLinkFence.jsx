import React, { useContext, useState } from 'react'
import { Box} from '@mui/material';
import { Header } from '../../../componets/Header';
import { PriceContext } from '../../../context/PriceContext';

import { ShowPanelPrice } from '../../../servicesToAPI/ShowPanelPrice';

import FenceModelForAPI from '../../../models/FenceModelForAPI';
import '../../../styles/ServicePriceCard.css';
import '../../../styles/AluminumCustomFence.css';

import { TaxForm } from '../../../servicesToAPI/TaxForm';
import { Gates } from '../../../servicesToAPI/Gates';
import { TotalPrice } from '../../../servicesToAPI/TotalPrice';

import InvoiceModelForAPI from '../../../models/InvoiceModelForAPI';
import { Invoice } from '../../../servicesToAPI/Invoice';
import { PanelPriceListener } from '../../../servicesToAPI/PanelPriceListener';



export const ChainLinkFence = () => {

  let {panelObject, numberOfGates, stateName, setPanelObject, setInvoiceModel} = useContext(PriceContext);
  const [showInvoice, setShowInvoice] = useState(false);

//----- To create Chain Link Object
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

  function handleInvoice(){
    let invoiceObject = new InvoiceModelForAPI(panelObject, numberOfGates, stateName);
    setInvoiceModel(invoiceObject);
    setShowInvoice(true);
  }
  
  return (
    <>
      <Header/>


      <section className="background-container "  
               id= "chainLink-container"
      >
          {/* <img src="images/chainlinkfence.jpg" alt="" /> */}
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
                            <div className='sqFeet-row'>
                                <label className='sqFeet-row-chain-link'>Square Feet:
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
                                <span className='price'>
                                    <div className='text-price'>Panel Price: $&nbsp;</div>
                                    <b className="bold-text">
                                      <ShowPanelPrice fenceModel={panelObject}/>
                                      <PanelPriceListener/>
                                      
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
                                <button className='getQuoteButton' onClick={()=>window.location.href = "/fences"}>Return</button>
                                <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                                <button className='getQuoteButton' onClick={handleInvoice}>Download Invoice</button>
                                <div>
                                  {showInvoice && <Invoice />}
                                </div>
                              </div>
                            </div>
                        </div>
                   
                    </Box>
                    
                
           </fieldset>     
                 
      </section>
      
   </>
  )
  
}
