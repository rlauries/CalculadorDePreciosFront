import React, { useEffect, useState,useContext } from 'react'

import chainLinkFence from '../ImgFence/ChainLinkFence.jpg';
import chainLinkGate from '../ImgFence/ChainLinkGate.jpg';

import { Box, Button, Container, Input, Select,  } from '@mui/material';

import { Header } from './Header';
import { Footer } from './Footer';
import { ShowPrice} from '../api/ShowPrice';
import { PriceContext } from '../context/PriceContext';




export const ChainLinkFence = () => {

  const {price} = useContext(PriceContext);

  const [gatePrice, setGatePrice] = useState(0); 

  const [urlFence, setUrlFence] = useState(0);
  const [urlGate, setUrlGate] = useState(0);
  
    
  function handleSqureFeetUrlOnChange(e){
    let sFeet = e.target.value;
    if(sFeet >= 0){
      let url =`https://localhost:7156/api/precio/chainLink/${sFeet}`;
      setUrlFence(url);
      
      
    }
    else
    {
      sFeet = 0;
    }    
    
  }

  
  
  
  
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
                                      src={chainLinkFence} 
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
                            
                              <button id='showFencePrice'>
                                Fence Price:  <ShowPrice url={urlFence}/>
                                Price from Price: {price}
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
                          width= "260"
                      />
                      
                        
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
                        Gate Price is: <ShowPrice url={urlGate}/>
                      </button>
                      
                    </Box>
                  </Box>
                  

                </fieldset>  
            
            
            
          </fieldset>            
          
          <button >
            Total: 
          </button>
       
                  
          
      </Container>
      <Footer/>
    </>
  )
  
}
