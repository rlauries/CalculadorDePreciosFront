import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import './MyStyle.css';
import { FenceList } from '../api/FenceList';

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
                    <FenceList/>
                    
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
