import React from 'react';
import { Header } from '../../componets/Header';
import { FrequentlyAskQuestion } from '../../componets/FrequentlyAskQuestion';
import '../../styles/Home.css';
import { FenceList } from '../../servicesToAPI/FenceList';
import { PergolaSlider } from '../../componets/PergolaSlider';
import { FenceSlider } from '../../componets/FenceSlider';

export const Home = () => {
  return (
    <div className='viewport'>
        
        <Header/>
        <section className='home-container'>
            <img src="images/welderHomerBanner.jpg" alt="" />
            <div className='hero'>
                <div className='voice'>Where Ideas Become Quoted</div>
                <div className="mission">Creating solutions that shape tomorrow</div>
                <div className='paragraph'>
                    <div>• We believe in the power of collaboration and innovation.</div>
                    <div>• Whether you're looking to transform your business, enhance your products, or pioneer new technologies, our dedicated team is here to support and guide you through the entire process. </div>
                    <div>• Join us on this exciting journey.</div>
                </div>
                <div className='buttons-home'>
                    <button className='service-home' onClick={()=>window.location.href = "/service"}>Check Our Services</button>
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
        <section>
            <FrequentlyAskQuestion/>
        </section>
        {/* <!-- end banner -->
        <!-- about section --> 
        <div id="about" className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-7">
                        <div className="about_box">
                            <div className="titlepage">
                                <FrequentlyAskQuestion/>
                            </div>
                            <h3>EVERYTHING YOU NEED IN ONE SOLUTION</h3>
                            <span>HELP YOUR NEXT PROJECT MOVE MORE SMOOTHER AND <br/> MORE EFFICIENT</span>
                            
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="about_img">
                            <figure><img src="images/about_img2.jpg" alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       */}



       
        {/* <Footer/> */}
        
                
      
    </div>
  )
}
