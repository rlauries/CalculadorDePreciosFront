import React, { useState, useContext } from 'react'

import { Box, Button, Container, Input, TextField } from '@mui/material';
import durafence from '../ImgFence/durafence.jpg';
import duraFenceGate from '../ImgFence/DuraFenceGate.jpg';


import { PriceContext } from '../context/PriceContext';

import { Header } from './Header';
import { Footer } from './Footer';
import { Gates } from './Gates';
import { ShowPanelPrice } from '../api/ShowPanelPrice';

 


export const DuraFence = () => {
  
  const {gatePrice, panelPrice, urlFence, setUrlFence} = useContext(PriceContext);
  
  const [sqFeet, setSqFeet] = useState(0);
  const [horizontalTubes, setHorizontalTubes] = useState(2)

  

  function handleSqureFeetUrlOnChange(e)
  {
    let sFeet = e.target.value;
    let url = `https://localhost:7156/api/precio/duraFence/${sFeet},${horizontalTubes}`;
    setUrlFence(url);
    setSqFeet(sFeet);
    

      
        
  }

  function horizontalOnChangeHandler(e)
  {
      let horizonTubesValue = e.target.value;
      let url = `https://localhost:7156/api/precio/duraFence/${sqFeet},${horizonTubesValue}`;
      setUrlFence(url);
      setHorizontalTubes(horizonTubesValue);
      
      console.log(url);
      console.log(urlFence);
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
          <legend>Dura Fence Information</legend>
          
          <Box sx={{ display: 'flex', flexDirection: 'row'   }}>
                <Box>
                          <img 
                                
                                src={durafence} 
                                alt="Dura Fence" />
                          
                      
                </Box>
                <Box sx={{
                          marginLeft: 4,
                          padding: 2,
                          border: 1,
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
                      
                        <label>Select Horizontal Rows
                          <select
                                onChange={horizontalOnChangeHandler} 
                          >
                            <option value="2">2</option>
                            <option value="3">3</option>                              
                          </select>
                        </label>

                          <button >
                            The Fence Quote is: <ShowPanelPrice url={urlFence}/>
                          </button>   
              
                    
                    
                  
                                                
                          
                          
                </Box>
                
          </Box>

          <fieldset>
              <legend>Number of Gates Needed for Your Project:</legend>
              <Box sx={{display: "flex",
                        flexDirection: "row",
                          justifyContent: "start"  
                        }}>
                  
                  <img src= {duraFenceGate} 
                      alt="Chain Link Gate"
                      
                  />
                  
                      
                <Box  >
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
