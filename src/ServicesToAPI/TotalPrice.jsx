import React, {useContext} from 'react'
import { PriceContext } from '../context/PriceContext';
import '../Style-components/ServicePriceCard.css'

export const TotalPrice = () => {
    let {taxRate, gatePrice, panelPrice,} = useContext(PriceContext);
  
    const totalPrice = () =>{
        let totalPrice = (gatePrice + panelPrice + (panelPrice + gatePrice) * taxRate /100).toFixed(2);
        return totalPrice;
    };
  return (
    <div className='totalPrice' >
        <span className='price'>
            <div className="text-price">
                Total Price : $&nbsp;
            </div>
            <b className="bold-text" >
                {totalPrice()}
            </b>
        </span>
    </div>
  )
}
