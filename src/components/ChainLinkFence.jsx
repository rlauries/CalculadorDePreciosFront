import React, { useEffect, useState,useContext } from 'react'

import chainlinkfence from '../ImgFence/chainlinkfence.jpg';
import chainLinkGate from '../ImgFence/ChainLinkGate.jpg';

import { Box, Button, Container, Input, Select,  } from '@mui/material';

import { Header } from './Header';
import { Footer } from './Footer';

import { PriceContext } from '../context/PriceContext';

import { ShowPanelPrice } from '../api/ShowPanelPrice';
import { Gates } from './Gates';




export const ChainLinkFence = () => {

  const {gatePrice, panelPrice, urlFence, setUrlFence} = useContext(PriceContext);
  setUrlFence(`https://localhost:7156/api/precio/chainLink/0`);    

  function handleSqureFeetUrlOnChange(e){
    let sFeet = e.target.value;
    if(sFeet >= 0){
      let url = `https://localhost:7156/api/precio/chainLink/${sFeet}`;
      setUrlFence(url);
      
    }
    else
    {
      sFeet = 0;
    }    
    
  }

  return (
    <>
      <Header/>


      <Container  sx={{
        border: 1, 
        margin:2, 
        padding: 2, 
        display: 'flex',
        flexDirection: 'column'     
        }}>
          <fieldset>
            <legend className='Legenda'>ChainLink Type Information</legend>
              
                
                <fieldset>
                    <legend className='Legenda'>Fence</legend>
                    <Box sx={{display: "flex",
                              justifyContent: "start"  
                            }}>
                      <Box >
                                <img 
                                      width="100%"
                                      src={chainlinkfence} 
                                      alt="ChainLink Fence" />
                                
                            
                      </Box>
                      <Box sx={{
                              marginLeft: 4,
                              border: 1,
                              padding: 2,
                              display: 'flex', 
                              flexDirection:'column',
                              justifyContent: 'space-evenly',
                              
                          } }>
                          <label>Square Feet:
                            <input className='sqFeet'
                                id='sqFeetInput'
                                placeholder='0'
                                type="number" 
                                name='sqFeet'
                                required 
                                
                                onChange={handleSqureFeetUrlOnChange}
                            />
                          </label>
        
                          <button id='showPanelPrice'>
                              Fence Price: <ShowPanelPrice url={urlFence}/>
                          </button>   
                                                    
                            
                              
                      </Box>
                   
                    </Box>
                    
                </fieldset>
                
                <fieldset>
                  <legend className='Legenda'>Number of Gates Needed for Your Project:</legend>
                  <Box sx={{display: "flex",
                            flexDirection: "row",
                              justifyContent: "start"  
                            }}>
                      
                      <img src= {chainLinkGate} 
                          alt="Chain Link Gate"
                          
                      />
                    <Box >
                      <Gates/>
                    </Box>  
                        
                    
                  </Box>
                  

                </fieldset>  
            
            
            
          </fieldset>            
          
          <button >
            Total Price : $  {gatePrice + panelPrice}
          </button>
       
                  
          
      </Container>




      <Footer/>
    </>
     )
  
}
