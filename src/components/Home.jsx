import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { FrequentlyAskQuestion } from './FrequentlyAskQuestion'

export const Home = () => {
  return (
    <div>
        <div className="main-layout">
            <div id="root"></div>
            
            <div className="loader_bg">
                <div className="loader"><img src="images/loading.gif" alt="#" /></div>
            </div>
            
            {/* Agregando componente Header */}
            <Header/>
            
            <section className="banner_main">
                <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-7">
                        <div className="text-bg">
                            <h1>Trusted and <br/>Professional Welders</h1>
                            <span>for your Business 
                                <p>Cultivating Ideas for Growth</p>
                            </span>
                            <span>Creativity in our toolkit</span>
                            <a href="./contactform">Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <div className="ban_img">
                            <figure><img src="images/Tipo_Cerca/WelderToFront.jpg" alt="Welder" /></figure>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* <!-- end banner -->
            <!-- about section --> */}
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
            
        </div>
       



       
        <div id="team" className="team">
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage">
                        <h2><strong className="yellow">Team</strong><br/>We Have a Professional Team of Business Analysts.</h2>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                    <div id="team" className="carousel slide team_Carousel " data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#team" data-slide-to="0" className="active"></li>
                          <li data-target="#team" data-slide-to="1"></li>
                          <li data-target="#team" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                              <div className="container">
                                <div className="carousel-caption ">
                                    <div className="row">
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team1.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team2.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6 d_none1">
                                          <div id="ho_bg" className="team_img ">
                                            <img src="images/team3.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                              <div className="container">
                                <div className="carousel-caption">
                                    <div className="row">
                                      <div className="col-md-4 col-sm-6 d_none1">
                                          <div id="ho_bg" className="team_img ">
                                            <img src="images/team1.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team2.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team3.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                              <div className="container">
                                <div className="carousel-caption">
                                    <div className="row">
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team1.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6 d_none1">
                                          <div id="ho_bg" className="team_img ">
                                            <img src="images/team2.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4 col-sm-6">
                                          <div id="ho_bg" className="team_img">
                                            <img src="images/team3.png" alt="#" />
                                            <div className="ho_socal">
                                                <ul className="social_icont">
                                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#team" role="button" data-slide="prev">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </a>
                        <a className="carousel-control-next" href="#team" role="button" data-slide="next">
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div id="client" className="testimonial">
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                    <div className="titlepage">
                        <h2><strong className="yellow">testimonial</strong><br/>What is Says our clients</h2>
                    </div>
                  </div>
              </div>
            </div>
            <div id="testimo" className="carousel slide testimonial_Carousel " data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#testimo" data-slide-to="0" className="active"></li>
                  <li data-target="#testimo" data-slide-to="1"></li>
                  <li data-target="#testimo" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                              <div className="col-md-6 offset-md-3">
                                <div className="test_box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <i><img src="images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                              <div className="col-md-6 offset-md-3">
                                <div className="test_box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <i><img src="images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                              <div className="col-md-6 offset-md-3">
                                <div className="test_box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                    <i><img src="images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
        </div>
        
                
      
    </div>
  )
}
