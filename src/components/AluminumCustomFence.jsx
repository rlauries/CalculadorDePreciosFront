import React, { useState, useContext } from 'react'

import { Header } from './Header';
import { Footer } from './Footer';

import aluminumcustomfence from '../ImgFence/aluminumcustomfence.jpg';
import aluminumGate from '../ImgFence/AluminumGates.jpg';


import { Box, Button, Container, Input, TextField } from '@mui/material';
import { ContactForm } from './ContactForm';
import { ShowPanelPrice } from '../api/ShowPanelPrice';
import { PriceContext } from '../context/PriceContext'; 
import { Gates } from './Gates';



export const AluminumCustomFence = () => {

  const {gatePrice, panelPrice, urlFence, setUrlFence} = useContext(PriceContext);
  
  
  const [sqFeet, setSqFeet] = useState(0);
  const [horizontalSize, setHorizontalSize] = useState(4);
  const [gap, setGap] = useState(1);

  function sqFeetOnChangeHandler(e)
  {
    let sFeet = e.target.value;
    let url = `https://localhost:7156/api/precio/aluminioCustom/${sFeet},${horizontalSize},${gap}`;
    setUrlFence(url);
    setSqFeet(sFeet);
  }

  function horizontalOnChangeHandler(e)
  {
     let horizonSizeValue = e.target.value;
     let url = `https://localhost:7156/api/precio/aluminioCustom/${sqFeet},${horizonSizeValue},${gap}`;
     setUrlFence(url);
     setHorizontalSize(horizonSizeValue);
  }

  function GapOnChangeHandler(e){
     let gapValue = e.target.value;
     let url = `https://localhost:7156/api/precio/aluminioCustom/${sqFeet},${horizontalSize},${gapValue}`;
     setUrlFence(url);
     setGap(gapValue);
    
  }



  return (
    <>
      <Header/>
      <Box  
        
          sx={{
            border: 1, 
            margin:2, 
            padding: 2, 
            display: 'flex',
            flexDirection: 'column'     
          }}>
          <fieldset>  
              <legend>Fence Information</legend>
              <Box sx={{ display: 'flex', flexDirection: 'row'   }}>
                  <Box>
                      <img 
                        src={aluminumcustomfence} 
                        alt="Aluminum Fence" 
                      />
                  </Box>
                  <Box  sx={{
                            width: 400,
                            justifyContent: 'space-evenly',
                            border:1,
                            padding: 1,
                            marginLeft: 10,
                            display: 'flex', 
                            flexDirection:'column',
                            alignItems: 'flex-start',
                            
                        } }>
                            <label >Square Feet: 
                              <input 
                                type="text"
                                placeholder='0'
                                onChange={sqFeetOnChangeHandler}
                              />
                              
                            </label>
                            
                            <label >Horizontal Size: 
                              <select
                                  onChange={horizontalOnChangeHandler} 
                              >
                                <option value="2">2</option>
                                <option value="4">4</option>                              
                              </select>
                            </label>  
                            
                            <label >Gap Between Horizonals: 
                              <select
                                    onChange={GapOnChangeHandler}  
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>    
                                <option value="4">4</option>
                              </select>
                            </label>  
                            <button >
                              The Fence Quote is: <ShowPanelPrice url={urlFence}/>
                            </button> 
                  </Box>
                    
              </Box>
              
              <Box>
                       
              <fieldset>
              <legend>Number of Gates Needed for Your Project:</legend>
              <Box sx={{display: "flex",
                        flexDirection: "row",
                          justifyContent: "start"  
                        }}>
                  
                  <img src= {aluminumGate} 
                      alt="Chain Link Gate"
                      
                  />
                  
                      
                <Box  >
                  <Gates/>
                </Box>
              </Box>
              

          </fieldset>  
                                      
              </Box>
        </fieldset>
        <button >
          Total Price : $  {gatePrice + panelPrice}
        </button>
          
      </Box>
      <Footer/>

  </>  
    
  )
}
