import React, { useState } from 'react'

import { Header } from './Header';
import { Footer } from './Footer';

import aluminumFence from '../ImgFence/AluminumFence.jpg';
import { Box, Button, Container, Input, TextField } from '@mui/material';
import { ContactForm } from './ContactForm'; 



export const AluminumFence = () => {

  const mainPath = 'http://localhost:3000/';

  const [sqFeet, setSqFeet] = useState('')
  const [horizontalSize, setHorizontalSize] = useState('')
  const [gap, setGap] = useState('')

  function sqFeetOnChangeHandler(e)
  {
      setSqFeet(e.target.value);
  }

  function horizontalOnChangeHandler(e)
  {
      setHorizontalSize(e.target.value);
  }

  function GapOnChangeHandler(e){
    setGap(e.target.value)
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
              <Box sx={{ display: 'flex',alignItems: 'flex-start', flexDirection: 'row'   }}>
                  <Box>
                            <img width={300} height={200}
                                  
                                  src={aluminumFence} 
                                  alt="Aluminum Fence" />
                            
                        
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
                                onChange={sqFeetOnChangeHandler}
                              />
                              
                            </label>
                            
                            <label >Horizontal Size: 
                              <input 
                                type="text"
                                onChange={horizontalOnChangeHandler} 
                              />  
                            </label>  
                            
                            <label >Gap Between Horizonals: 
                              <input 
                                
                                type="text"
                                onChange={GapOnChangeHandler} 
                              />  
                            </label>  
                            
                        
                            
                            
                  </Box>
                    
              </Box>
              
              <Box>
                    <Button 
                        variant='contained'
                        disabled={ 
                                  sqFeet.length === 0 || 
                                  horizontalSize.length === 0 ||
                                  gap.length === 0

                                }
                    >
                      Get Quote
                    </Button>     
                    <Button variant='text'
                            href={mainPath}
                    >
                      Return
                    </Button>     
                                              
              </Box>
        </fieldset>

          
      </Box>
      <Footer/>

  </>  
    
  )
}
