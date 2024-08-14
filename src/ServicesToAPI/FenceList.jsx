  import React, { useRef} from 'react';

  import '../Style-components/FenceList.css';

export const FenceList = () => {
  
    // const [fenceList, setFenceList] = useState([]);

    // const fenceListDB = async () => {
    //     const data = await fetch('https://localhost:7142/api/fence/fenceList');
    //     const fences = await data.json();
    //     setFenceList(fences);
    // }
 
    // useEffect( () => {
    //     fenceListDB()
    // }, []);

    //    fenceList.map(f =>(
            //     <div className="item" >
            //         <div id="ho_color" className="service_box">
            //             <img src={`images/${f.nameId}.jpg`} alt="#"/>
            //             <div className="content">
            //                 <a className='fenceType' href={`/${f.nameId}`}><h3>{`${f.name}`} Fence</h3></a>
            //                 <p>
            //                     <b className='size'>Size: 
            //                     </b> 
            //                     {`${f.size}`}
            //                     <br/>
            //                     <b className='installation'>Installation:
            //                     </b>  
            //                     {`${f.installation}`}
            //                 </p>
            //             </div>
                        
                        
            //         </div>
            //     </div>        
            //    ))
    // let nextDom = document.getElementById('next');
    // let carouselDom = document.getElementById('carousel');
    // let listItemDom = document.querySelector('.carousel .list')
    // let thumbnailDom = document.querySelector('.carousel .thumbnail')        

    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const thumbnailRef = useRef(null);
    
    let timeRunning = 3000;
    let runTimeOut;

    const showSlider = () =>{
      let listItemDom = listRef.current;
      let thumbnailDom = thumbnailRef.current;

      let itemSlider = listItemDom.querySelectorAll('.carousel .list .item');
      let itemThumbnail = thumbnailDom.querySelectorAll('.carousel .thumbnail .item');
      
      
      listItemDom.appendChild(itemSlider[0]);
      thumbnailDom.appendChild(itemThumbnail[0]);
      carouselRef.current.classList.add('next');
      
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselRef.current.classList.remove('next');
      }, timeRunning)

    
    }

  return (
    
    <div className='carousel' id='carousel' ref={carouselRef}>
        <div className='list' ref={listRef}>
            <div className="item">
                <img src="images/chainlinkfence.jpg" alt="" />
                <div className="content">
                    <div className="fenceType">Type Of Fence</div>
                    <div className='fenceName'>Chain Link </div>
                    <div className='description'>
                      <ul>
                        <li>
                            <h3>Overview:</h3>
                            <p>
                               • A chain link fence is a versatile and cost-effective fencing option that provides robust security and durability for a wide range of applications. Whether for residential, commercial, or industrial use, chain link fences offer a reliable solution to keep your property safe and secure.
                            </p>
                            </li>
                        <li>
                            <h3>Durability:</h3>
                            <p>
                            • Made from high-quality galvanized steel, chain link fences are designed to withstand harsh weather conditions and resist corrosion.
                            </p>
                        </li>
                        <li>
                          <h3>Versatility:</h3>
                          <p>
                            • Ideal for a variety of applications including residential yards, sports fields, playgrounds, schools, parks, industrial areas, and construction sites.
                        </p>
                          </li>
                        <li>
                          <h3>Low Maintenance:</h3>
                          <p>
                            • Requires minimal upkeep compared to other fencing materials.
                          </p>
                          </li>
                        <li>
                          <h3>Aesthetic Options:</h3>
                          <p>
                            • Available in different coatings and colors, including the classic silver galvanized finish and colored vinyl coatings such as black or green to blend with the environment or match your property’s aesthetic.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="buttons">
                      <button className='getQuoteButton' onClick={()=>window.location.href = "/chainlinkfence"}>Get Quote</button>
                      <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="images/durafence.jpg" alt="" />
                <div className="content">
                    <div className="fenceType">Type Of Fence</div>
                    <div className='fenceName'>DuraFence </div>
                    <div className='description'>
                      <ul>
                        <li>
                          <h3>Overview:</h3>
                          <p>
                            • Dura Fence is the ultimate fencing solution designed to offer unmatched strength, durability, and aesthetic appeal. Ideal for both residential and commercial applications, Dura Fence provides a secure and stylish boundary that stands the test of time.
                          </p>
                          </li>
                        <li>
                          <h3>Durability:</h3>
                          <p>
                            • Constructed from high-grade, heavy-duty galvanized steel panels and posts, Dura Fence is built to withstand extreme weather conditions, including strong winds, heavy rain, and intense sunlight.
                          </p>
                        </li>
                        <li>
                          <h3>Security:</h3>
                          <p>
                            • The robust steel construction provides a formidable barrier that deters unauthorized access and enhances the security of your property.
                          </p>
                        </li>
                        <li>
                          <h3>Low Maintenance:</h3>
                          <p>
                          • The galvanized and coated steel panels require minimal upkeep.
                          </p>
                        </li>
                        <li>
                          <h3>Aesthetic Options:</h3>
                          <p>
                            • Combines functionality with aesthetics, featuring a sleek, modern design that complements any property.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="buttons">
                      <button className='getQuoteButton' onClick={()=>window.location.href = "/durafence"}>Get Quote</button>
                      <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="images/aluminumcustomfence.jpg" alt="" />
                <div className="content">
                    <div className="fenceType">Type Of Fence</div>
                    <div className='fenceName'>Aluminum Custom  </div>
                    <div className='description'>
                      <ul>
                        <li>
                          <h3>Overview:</h3>
                          <p>
                            • Elevate Your Property with Style and Functionality. Crafted with precision engineering and high-quality materials, our modern fencing solution offers a sleek aesthetic that enhances the beauty of any property while providing unmatched strength and longevity.</p>
                        </li>
                        
                        <li>
                          <h3>Sleek and Stylish Design:</h3>
                          <p>
                            • Boasts clean lines, minimalist profiles, and sleek finishes, adding a touch of elegance and sophistication to your outdoor space.
                          </p>
                        </li>
                        <li>
                          <h3>Weather-Resistant:</h3>
                          <p>
                            • The corrosion-resistant properties of aluminum ensure that your fence maintains its pristine appearance for years to come with minimal maintenance required.
                          </p>
                        </li>
                        <li>
                          <h3>Versatile Customization:</h3>
                          <p>
                            • Tailor your Aluminum Modern Fence to suit your unique preferences with a variety of design options, including different heights, panel widths, and color choices.
                          </p>
                        </li>
                        <li>
                          <h3>Low Maintenance:</h3>
                          <p>
                            • Our aluminum modern fences are resistant to rust, rot, and corrosion, ensuring long-lasting performance without the need for repainting or staining.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="buttons">
                      <button className='getQuoteButton' onClick={()=>window.location.href = "/aluminumcustomfence"}>Get Quote</button>
                      <button className='contactUsButton' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        {/* ...thumbnail... */}
        <div className='thumbnail' ref={thumbnailRef}>
            <div className="item">
                <img src="images/durafence.jpg" alt="" />
                <div className="content">
                    <div className='fenceName'>DuraFence </div>
                </div>
                
            </div>
            <div className="item">
                <img src="images/aluminumcustomfence.jpg" alt="" />
                <div className="content">
                    <div className='fenceName'>Aluminum Custom</div>
                </div>
                
            </div>
            <div className="item">
                <img src="images/chainlinkfence.jpg" alt="" />
                <div className="content">
                    <div className='fenceName'>Chain Link </div>
                </div>
            </div>
        </div>
        {/* ...arrows... */}
        <div className="arrows">
          <button id='next' className='next' onClick={showSlider}>
            {'<-More'}
          </button>
        </div>
        <div className="time"></div>
    </div>
  )
};
