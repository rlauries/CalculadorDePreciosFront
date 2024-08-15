
//import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
//import { useCallback } from 'react';
import { PriceContext } from '../context/PriceContext';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import NorthWestOutlinedIcon from '@mui/icons-material/NorthWestOutlined';
import '../Style-components/MyStyle.css';


const TaxForm = () => {
  const [stateName, setStateName] = useState('');
  const [cities, setCities] = useState([]);
  
  const [clicked, setClicked] = useState(false);
  let {taxRate, setTaxRate} = useContext(PriceContext);

  const handleStateNameChange = (e) => {
    let state = e.target.value;
    setStateName(state);
    fetchCities(state);
    setClicked(false);
    if (state === "") {
        setTaxRate(""); // Establecer taxRate en vacío cuando el estado está vacío
    }
  };
     
  // const fetchCities = useCallback(() => {
  //   let url = `https://localhost:7142/api/price/GetStateByShortener/${stateName}`;
  //   let responses = axios.get(url)
  //             .then((response) => { setCities(response.data); })
  //             .catch(error => { setCities("Error:" + error); });
  //   console.log(responses);
  //   return responses;
  // }, [stateName]);
  const fetchCities = () =>{

  }
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);
  

  const fetchTaxByCity = (name) => {
    // let url =`https://localhost:7142/api/price/GetStateTaxRate/${name}`;
    // let responses = axios
    //     .get(url)
    //     .then((response) =>{setTaxRate(response.data)})
    //     .catch(error => {setTaxRate(0)});
    // return(
    //   responses.data
    // ) 
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
    <div>
      
      <form className="tax-from" style={{marginLeft: '10px',display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
        <div >
          <label htmlFor="stateName">State Name:</label>
          <input
            type="text"
            id="stateName"
            placeholder='Florida'
            value={stateName}
            onChange={handleStateNameChange}
            
          />
        </div>
        <div class="city-list-container" >
            {printCityList(cities)}
        </div>

        <input  style={{flexGrow: '1',width:'1%', border:'0',opacity:'0'}}/>
        <span id="taxRate" readOnly // Para evitar que el usuario modifique el valor manualmente
        >
            Tax Rate: $ &nbsp; 
            <b className="bold-text" >
              {taxRate} %
            </b> 
        </span>
      </form>
    </div>
  );
};

export {TaxForm};
