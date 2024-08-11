import React from 'react'
import '../../Style-components/InsideFenceStyles.css'
import '../../Style-components/MyStyle.css';

export const Footer = () => {
  return (
    <div className="footer-container" style={{bottom: '0'}} >
        <footer >
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="logo2" href="#"><img src="images/loogo2.png" alt="#"/></a>
                        </div>
                        <div id='in-footer' className="col-lg-5 col-md-6 col-sm-6">
                            <h3>Contact Us</h3>
                            <ul className="location_icon">
                                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a> 11350 nw South River Dr. Medley, Fl 33178
                                    <br/> United State 
                                </li>
                                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>sales@lauriesGW.com<br/> admin@lauriesGW.com</li>
                                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></a>305-805-0555<br/>786-237-1470</li>
                            </ul>
                            <ul className="social_icon">
                                <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li> <a href="#">   <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <h3>Menus</h3>
                            <ul className="link_icon">
                                <li > <a href="home"> Home</a></li>
                                <li> <a href="gallery">Gallery</a></li>
                                <li className="active"> <a href="service">Services</a></li>
                                <li> <a href="contactform">Contact us</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <p>© 2019 All Rights Reserved.<a href="https://html.design/"> Free  html Templates</a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
