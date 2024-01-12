import { Box } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export const AddEmployee = () => {
    const [employee, setEmployee] = useState(
        {
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            
        }
      );
      
      const handleInputOnChange = (e) => {
        const {name,value}  = e.target;
        setEmployee({
          ...employee,
          [name]: value,
        });
      };
    
      const handleForm = (e) => {
        e.preventDefault();
        console.log(employee)
        
      };
      
      const handleAlerta = (e) =>{
        alert(`${employee.name} ${employee.lastName}   : is been added to Data Base`)
      }
    
    
    
      return(
    
        <fieldset>
          <legend><h2>New Employee</h2></legend>
          <form 
              onSubmit={handleForm}
          >
            <Box sx={{border: 1,
                      padding: 2,
                        
                    }}  
            >
                <div>
                <label >Name:
                    <input 
                    type="text"
                    name='name'
                    required
                    onChange={handleInputOnChange}
                    />
                    
                </label>
                
                </div>
                
                <div>
                <label >Last Name:
                    <input 
                    type="text"
                    name='lastName'
                    required
                    onChange={handleInputOnChange}
                    />
                    
                </label>
                </div> 
                
                <div>
                <label >Email:
                    <input 
                    type="email"
                    name='email'
                    required
                    onChange={handleInputOnChange}
                    />
                    
                </label>
                
                </div>
                <div>
                <label >Phone:
                    <input 
                    type="text"
                    name='phone'
                    required
                    onChange={handleInputOnChange}
                    />
                    
                </label>
                
                </div>  
                
                <div>
                <label >Address:
                    <input 
                    type="text"
                    name='address'
                    required
                    onChange={handleInputOnChange}
                    />
                    
                </label>
                
                </div>
                
            </Box>
                
    
            <button type='submit' 
                    onClick={handleAlerta}
                    disabled={ 
                        employee.name.length === 0 || 
                        employee.lastName.length === 0
                      }
            >
                 Send Data 
                
            </button>
    
          </form>
    
        </fieldset>
      )
    
}
