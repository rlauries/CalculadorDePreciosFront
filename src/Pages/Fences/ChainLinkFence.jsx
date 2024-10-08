import React, { useContext, useState } from 'react'
import { Box} from '@mui/material';
import { Header } from '../Layouts/Header';
import { PriceContext } from '../../context/PriceContext';
import { ShowPanelPrice } from '../../ServicesToAPI/ShowPanelPrice';
import FenceModelForAPI from '../../Models/FenceModelForAPI';
import '../../Style-components/ServicePriceCard.css';
import '../../Style-components/Contactus.css';
import { TaxForm } from '../../ServicesToAPI/TaxForm';
import { Gates } from '../../ServicesToAPI/Gates';
import { TotalPrice } from '../../ServicesToAPI/TotalPrice';
import InvoiceModelForAPI from '../../Models/InvoiceModelForAPI';
import { Invoice } from '../../ServicesToAPI/Invoice';



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
