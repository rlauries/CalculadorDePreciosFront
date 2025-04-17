import React, {useEffect, useContext} from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { PriceContext } from '../context/PriceContext';


export const PanelPriceListener = () => {

    const { panelPrice ,setPanelPrice } = useContext(PriceContext);
        
    useEffect(() => {
        const connection = new HubConnectionBuilder()
               .withUrl("https://localhost:7142/hub/panelPrice",{
                    withCredentials: true
               })           
               .withAutomaticReconnect()
               .build();

        connection.start()
            .then(() => {
                console.log("✅ Connected to SignalR hub.");
                
                connection.on("ReceivePrice", (priceValue) => {
                    setPanelPrice(priceValue);
                    console.log("📡 New price received:", priceValue);
                    }); 
            })
            .catch(err => {
                console.error("❌ SignalR connection failed:", err);
            });
            
              

        return () => {
            connection.stop();
        }; 
        
    }, []);
    
    return <div>
                {panelPrice !== null ? (
                    <div>${panelPrice.toFixed(2)}</div> 
                ) : (
                    <div>Waiting for price...</div>
                )}
           </div>;
  
}
