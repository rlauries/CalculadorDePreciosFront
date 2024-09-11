import React, {useRef} from 'react'
import '../Style-components/PergolaList.css'
import { Header } from '../Pages/Layouts/Header';  

export const PergolaList = () => {

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  //const thumbnailRef = useRef(null);
  
  // let timeRunning = 3000;
  //let runTimeOut;

  const showSlider = () =>{
    let listItemDom = listRef.current;
    

    let itemSlider = listItemDom.querySelectorAll('.carousel-pergola .list .item');
    // let itemThumbnail = thumbnailDom.querySelectorAll('.carousel .thumbnail .item');
    
    
    listItemDom.appendChild(itemSlider[0]);
    // thumbnailDom.appendChild(itemThumbnail[0]);
    carouselRef.current.classList.add('next');
    
    //  (runTimeOut);
    // runTimeOut = setTimeout(() => {
    //   carouselRef.current.classList.remove('next');
    // }, timeRunning)

  
  }
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='carousel-pergola' id='carousel' ref={carouselRef}>
          <div className='list' ref={listRef}>
              <div className="item">
                  <img src="images/Pergola-Steel.jpg" alt="" />
                  <div className="content">
                      <div className="fenceType">Type Of Structure</div>
                      <div className='fenceName'>Steel Pergola </div>
                      <div className='description'>
                        <ul>
                          <li>
                              <h3>Overview:</h3>
                              <div>
                                • A steel pergola is known for its strength and durability. It is ideal for modern designs that require a sleek, industrial look. Steel pergolas can withstand harsh weather conditions, including heavy winds and snow, due to their robust structure. However, they may require periodic maintenance to prevent rust and corrosion unless they are made of galvanized or powder-coated steel.
                              </div>
                          </li>
                          <li>
                              <h3>Best For:</h3>
                              <div>
                              • Urban and contemporary settings where durability is a priority.
                              </div>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="buttons">
                        <button className='getQuoteButton' onClick={()=>window.location.href = "/chainlinkfence"}>Get Quote</button>
                        <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                        <button id='next' className='next' onClick={showSlider}>
                          {'Next->'}
                        </button>
                        
                      </div>
                  </div>
              </div>
              <div className="item">
                  <img src="images/Pergola-Aluminum.jpg" alt="" />
                  <div className="content">
                      <div className="fenceType">Type Of Structure</div>
                      <div className='fenceName'>Aluminum Pergola </div>
                      <div className='description'>
                        <ul>
                          <li>
                            <h3>Overview:</h3>
                            <div>
                              • Aluminum pergolas are lightweight, rust-resistant, and low maintenance, making them perfect for coastal areas or locations with high humidity. They offer a modern appearance and can be powder-coated in various colors to match your outdoor decor. Aluminum is not as strong as steel but provides excellent resistance to weather elements, including UV radiation.
                            </div>
                            </li>
                          <li>
                            <h3>Best For:</h3>
                            <div>
                              • Coastal regions and modern homes needing a rust-free, lightweight, and low-maintenance solution.
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="buttons">
                        <button className='getQuoteButton' onClick={()=>window.location.href = "/durafence"}>Get Quote</button>
                        <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                        <button id='next' className='next' onClick={showSlider}>
                          {'Next->'}
                        </button>
                        
                      </div>
                  </div>
              </div>
              <div className="item">
                  <img src="images/Pergola-Wood.jpg" alt="" />
                  <div className="content">
                      <div className="fenceType">Type Of Structure</div>
                      <div className='fenceName'>Wood Pergola  </div>
                      <div className='description'>
                        <ul>
                          <li>
                            <h3>Overview:</h3>
                            <div>
                              • Wood pergolas offer a natural and classic look that blends seamlessly into gardens and outdoor spaces. Made from materials such as cedar, pine, or redwood, they can be customized with various stains and finishes. While wood pergolas provide a warm, organic aesthetic, they require regular maintenance, including sealing and staining, to protect against weathering, pests, and rot.
                            </div>
                          </li>
                          
                          <li>
                            <h3>Best For:</h3>
                            <div>
                              • Traditional and rustic settings where a natural look and feel are desired.
                            </div>
                          </li>
                          
                          
                        </ul>
                      </div>
                      <div className="buttons">
                        <button className='getQuoteButton' onClick={()=>window.location.href = "/aluminumcustomfence"}>Get Quote</button>
                        <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                        <button id='next' className='next' onClick={showSlider}>
                          {'Next->'}
                        </button>
                        
                      </div>
                      
                  </div>
              </div>
              <div className="item">
                  <img src="images/pergola-insulated.jpg" alt="" />
                  <div className="content">
                      <div className="fenceType">Type Of Structure</div>
                      <div className='fenceName'>Insulated Roof Pergola  </div>
                      <div className='description'>
                        <ul>
                          <li>
                            <h3>Overview:</h3>
                            <div>
                              • Insulated pergolas come with a roofing system that includes a layer of insulation, providing better temperature control. They are designed to keep the area beneath cool in the summer and warm in the winter, making them perfect for year-round use. These pergolas often come with additional features like integrated lighting, fans, or heating systems.
                            </div>
                          </li>
                          
                          <li>
                            <h3>Best For:</h3>
                            <div>
                              • All-season use and areas with extreme temperatures, where comfort and climate control are essential.
                            </div>
                          </li>
                          
                          
                        </ul>
                      </div>
                      <div className="buttons">
                        <button className='getQuoteButton' onClick={()=>window.location.href = "/aluminumcustomfence"}>Get Quote</button>
                        <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                        <button id='next' className='next' onClick={showSlider}>
                          {'Next->'}
                        </button>
                        
                      </div>
                      
                  </div>
              </div>
          </div>



          
          
      </div>
    </div>
  )
}
