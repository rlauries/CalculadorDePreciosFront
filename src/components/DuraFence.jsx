import React, { useState } from 'react'

import { Box, Button, Container, Input, TextField } from '@mui/material';
import durafence from '../ImgFence/DuraFence.jpg';
import duraFenceGate from '../ImgFence/DuraFenceGate.jpg';

import { Header } from './Header';
import { Footer } from './Footer';

import { ContactForm } from './ContactForm'; 
import { Contador } from './Contador';
import { ShowPrice } from '../api/ShowPrice';

export const DuraFence = () => {
  
  const mainPath = 'http://localhost:3000/';
  
  const [sqFeet, setSqFeet] = useState('')
  const [horizontalTubes, setHorizontalTubes] = useState('')

  const [urlFence, setUrlFence] = useState("");


  function sqFeetOnChangeHandler(e)
  {
      setSqFeet(e.target.value);
  }

  function horizontalOnChangeHandler(e)
  {
      setHorizontalTubes(e.target.value);
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
                          <TextField 
                                label="Square Feet" 
                                text="Square Feet"
                                onChange={sqFeetOnChangeHandler}
                          >

                          </TextField>
                          <fieldset>
                            <legend>Select Horizontal Rows</legend>
                            <select>
                              <option value="2">2</option>
                              <option value="3">3</option>                              
                            </select>
                          </fieldset>
                          
                          <button >
                            The Fence Quote is: <ShowPrice url = {urlFence}/>
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
                      width= "260"
                  />
                  
                      
                <Box padding={2} >
                  <Contador />
                </Box>
              </Box>
              

          </fieldset>  
            
          
        </fieldset>
        
      </Container>
      <Footer/>
    </>     
          

  )
}
