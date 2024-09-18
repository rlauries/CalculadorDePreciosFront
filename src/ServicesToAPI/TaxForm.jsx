
import axios from 'axios';
import React, { useState, useContext,useEffect } from 'react';
import { useCallback } from 'react';
import { PriceContext } from '../context/PriceContext';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import NorthWestOutlinedIcon from '@mui/icons-material/NorthWestOutlined';

import '../Style-components/ServicePriceCard.css';


const TaxForm = () => {
  const [cities, setCities] = useState([]);
  const [clicked, setClicked] = useState(false);

  let {taxRate, setTaxRate, stateName, setStateName} = useContext(PriceContext);

  const handleStateNameChange = (e) => {
    let state = e.target.value;
    setStateName(state);
    setClicked(false);
    if (state === "") {
        setTaxRate(""); // Establecer taxRate en vacío cuando el estado está vacío
    }
  };
     
  const fetchCities = useCallback(() => {
    let url = `https://localhost:7142/api/price/GetStateByShortener/${stateName}`;
    let responses = axios.get(url)
              .then((response) => { setCities(response.data); })
              .catch(error => { setCities("Error:" + error); });
    console.log(responses);
    return responses;
  }, [stateName]);
  
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);
  

  const fetchTaxByCity = (name) => {
    let url =`https://localhost:7142/api/price/GetStateTaxRate/${name}`;
    let responses = axios
        .get(url)
        .then((response) =>{setTaxRate(response.data)})
        .catch(error => {setTaxRate(0)});
    return(
      responses.data
    ) 
  }

  const handleClick = (city) => {
    let newCity = city;
    setStateName(newCity);
    let name = document.getElementById('stateName');
    name.value = newCity;
    setCities([]);
    setClicked(true);
    fetchTaxByCity(newCity);
  };
  const printCityList = (myCities) =>{
      if(myCities !== null && !clicked){
        return(
            <ul className="city-list" >
                {
                    Array.isArray(myCities) && myCities.map((city, index) => (
                    <li className='city-list-li' key={index}
                        onClick={() => handleClick(city)}
                        // 
                    >
                        <MapsHomeWorkOutlinedIcon 
                                className='li-icons' 
                                style={{fontSize: '2.5rem', marginRight: '1rem', color: '032154' }}
                                
                        />
                        <span
                          readOnly
                          style={{ border: 'none',cursor: 'grabbing ', flexGrow: 1, width:'280px', alignItems:'center', justifyContent:'center' }}
                        >
                            <b className="bold-text" >{city}</b>
                        </span>
                        
                        <NorthWestOutlinedIcon  className='li-icons' style={{ color: '032154',fontSize: '2.5rem' }}/>
                      
                    </li>
                    ))
                }
            </ul>
        )
      }
    
  };
  
  return (
    <div className='tax-row'>
        <label>State Name:
                <input
                    type="text"
                    id="stateName"
                    placeholder='Florida'
                    value={stateName}
                    onChange={handleStateNameChange}
                />
        </label>
        <div class="city-list-container" >
            {printCityList(cities)}
        </div>

        <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
        <span className='price' id="taxRate" readOnly>
            <div className="text-price"> 
                Tax Rate: $ &nbsp; 
            </div>        
            <b className="bold-text" >
                {taxRate} %
            </b> 
        </span>

        
    </div>
  );
};

export {TaxForm};
