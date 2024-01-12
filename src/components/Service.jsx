import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import './MyStyle.css';

export const Service = () => {
  return (
    <div className="main-layout">
        <Header/>
        <div className="loader_bg">
            <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
        
        <div id="service" className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="titlepage">
                        <h2>Types of Fences</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div id="ho_color" className="service_box">
                        <img src="images/ChainLinkFence.jpg" alt="#"/>
                        <a href="/chainlinkfence"><h3>Chain Link Fence</h3></a>
                        <p><b className='H3'>Size:</b> Comes in 20-foot (6.1 m) or 50-foot (15 m) rolls, which can be joined by "unscrewing" one of the end wires and then "screwing" it back in so that it hooks both pieces. Common heights include one-foot increments from 3 feet (0.91 m) to 8 feet (2.4 m), and other heights including 3 feet 6 inches (1.07 m), 10 feet (3.0 m), and 12 feet (3.7 m) although almost any height is possible. Mesh is commonly 9, 11, or 11+1⁄2 wire gauge. Mesh length can also vary based on need, with the standard diamond size being 2 inches (5.1 cm).
                            <br/>
                            <b className='H3'>Installation:</b>  Involves setting posts into the ground and attaching the fence to them. The posts may be steel tubing, timber or concrete and may be driven into the ground or set in concrete. 
                        </p>
                        <a className=" read_morea" href="#">Get Started <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="ho_color" className="service_box">
                        <img src="images/DuraFence.jpg" alt="#"/>
                        <a href="/durafence"><h3>Dura Fence</h3></a>
                        
                        <p> 
                            <b className='H3'>Size:</b> Dura Fence Planks are 4,5,6,7 & 8 feet height X 6 in width, come in white and br/onze colors.
                            <br/>
                            <b className='H3'>Installation:</b> Insert the posts into the two holes, ensuring that they both sit at the same height,then, slide the fence panel into the channel directly above the gravel board, and secure the panel to the back of the post, using colour-matched screws.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="ho_color" className="service_box">
                        <img src="images/CustomAluminum.jpg" alt="#"/>
                        <a href="/aluminumfence"><h3>Aluminum Custom Fence</h3></a>
                        
                        <p>
                            <b className='H3'>Size:</b>Standard Section are 6 feet wide x 3 feet , 3 feet-½, 4 feet , 4 feet-½ , 5 feet or 6 feet high. Pickets for Commercial fencing come with a spacing between pickets standard 3-5/8 and optional 1-½. Sections come fully assembled. Custom width or height sections are available.
                            <br/>
                            <b className='H3'>Installation:</b>  Gates need to be installed on level ground. Gates and fence panels should be installed so that the bottom of the fence is 2 feet above ground level to allow for lawn maintenance/cutting. Once installed, the top of the post will be at the same height as the top of the tallest part of the fence panel. Separate and identify your posts. The rails from the fence panels will be inserted into the pre-punched holes of the posts.
                            </p>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    
        <Footer/>
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-3.0.0.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="js/custom.js"></script>
    </div>
  )
}
