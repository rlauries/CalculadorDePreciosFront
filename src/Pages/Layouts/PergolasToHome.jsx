import React from 'react'
import "../../Style-components/PergolasToHome.css"


export const PergolasToHome = () => {
  return (
    <div className='pergolas-to-home' onClick={()=>window.location.href = "/pergolas"}>
        <div>
            <h2>
                Discover the perfect blend of style, functionality, and comfort with our modern pergolas
            </h2>
            </div>
        <div className="pergola_img">
            <span>
                <img src="images/SteelPergola.jpg" alt="#" />
                
            </span>
            <span>
                <img src="images/aluminumWoodPergola.jpg" alt="#" />
                
            </span>
        
       
        </div>
        <div className="pergola_img">
            <span>
                <img src="images/crossBarPergola.jpg" alt="#" />
                
        
            </span>
            <span>
                <img src="images/insulatedRoof.jpg" alt="#" />
                   
            </span>    
            
        </div>
        
    
    </div>
  )
}
