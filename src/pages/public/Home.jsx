import React from 'react';
import { Header } from '../../componets/Header/Header';
import { FrequentlyAskQuestion } from '../../componets/FrequentlyAskQuestion/FrequentlyAskQuestion';
import '../../styles/Home.css';
import { PergolaSlider } from '../../componets/PergolaSlider/PergolaSlider';
import { FenceSlider } from '../../componets/FenceSlider/FenceSlider';
import { BannerImageHalf } from '../../componets/Half-Image-Banner/BannerImageHalf';

const Home = () => {
  return (
    <div className='viewport'>
        
        <Header/>
        <section className='home-container'>
            <img src="images/20250506_1920_Welder at Work_remix_01jtkyadxvfpea11z2kkf20re5.png" alt="" />
            <div className='hero'>
                <div className='voice'>Where Ideas Become Quoted</div>
                <div className="mission">Creating solutions that shape tomorrow</div>
                <div className='paragraph'>
                    <div>• We believe in the power of collaboration and innovation.</div>
                    <div>• Whether you're looking to transform your business, enhance your products, or pioneer new technologies, our dedicated team is here to support and guide you through the entire process. </div>
                    <div>• Join us on this exciting journey.</div>
                </div>
                <div className='buttons-home'>
                    <button className='service-home' onClick={()=>window.location.href = "/gallery"}>Check Our Gallery</button>
                    <button className='contactus-home' onClick={()=>window.location.href="/contactus"}>Contact Us</button>
                </div>
            </div>

        </section>
       
        <section>
            <PergolaSlider/>
        </section>
        <section className='third-banner-container'>
            <span className='third-banner'>
                <div className="third-banner-text">
                    <p>
                        Engineered for performance. Built to last. Designed to impress.
                    </p>
                </div>
                <div className="third-banner-button-wrapper">
                    <button className='third-banner-button' onClick={() => window.location.href = "/contactus"}>
                        Contact Us
                    </button>
                </div>
            </span>
        </section>
        <section>
            <FenceSlider/>
        </section>
        <div className='forth-banner'>
            <span className='info'>
                <h2>Personalized Service <strong>|</strong></h2>
                
                <p>
                    From concept to completion, we deliver top-quality fabrication and structural solutions that stand the test of time. Our team is committed to excellence in every weld, every project, every time.
                </p>
            </span>
            
            <img src="images/workers-banner.jpg" alt="" />
        </div>
        <section className='third-banner-container'>
            <span className='third-banner'>
                <div className="third-banner-text">
                    <p>
                        Crafted for strength. Built for life. Styled for impact.
                    </p>
                </div>
                <div className="third-banner-button-wrapper">
                    <button className='third-banner-button' onClick={() => window.location.href = "/contactus"}>
                        Contact Us
                    </button>
                </div>
            </span>
        </section>
        <div style={{marginTop:"100px"}}>
            <BannerImageHalf 
                image="images/originals/Pergolas/IMG_7746.jpg" 
                title=" Wood Pergola Myth" 
                subtitle="Discover the truth behind wood pergolas and why they're a durable, timeless choice for your outdoor space. Don't let misconceptions hold you back!"
                reversed={false}
                
            />
            <BannerImageHalf
                image="images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.jpg" 
                title=" Outdoor LED Lights Myth" 
                subtitle="Learn how outdoor string LED lights are not only energy-efficient and long-lasting but also weather-resistant, providing a vibrant and cozy atmosphere year-round. Say goodbye to concerns about durability and maintenance, and illuminate your outdoor spaces with ease and style."
                reversed={true} // Esto invierte el orden de imagen y texto
            /> 
        </div>
        <section>
            <FrequentlyAskQuestion/>
        </section>
        
                
      
    </div>
  )
}
export default Home;