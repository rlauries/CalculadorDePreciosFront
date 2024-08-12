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
                            <img src="images/loogo2.png" alt="#"/>
                        </div>
                        <div id='in-footer' className="col-lg-5 col-md-6 col-sm-6">
                            <h3>Contact Us</h3>
                            <ul className="location_icon">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> 11350 nw South River Dr. Medley, Fl 33178
                                    <br/> United State 
                                </li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i>sales@lauriesGW.com<br/> admin@lauriesGW.com</li>
                                <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i>305-805-0555<br/>786-237-1470</li>
                            </ul>
                            <ul className="social_icon">
                                <li> <i className="fa fa-facebook-f"></i></li>
                                <li> <i className="fa fa-twitter"></i></li>
                                <li> <i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                <li> <i className="fa fa-instagram"></i></li>
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
                                <p>© 2019 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
