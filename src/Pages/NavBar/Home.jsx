import React from 'react'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'
import '../../Style-components/Home.css';
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



       
        <Footer/>
        
                
      
    </div>
  )
}
