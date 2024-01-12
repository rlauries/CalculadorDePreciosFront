import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Gallery = () => {
  return (
    <>
        <Header/>
        <div className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="titlepage">
                            <h2><strong className="yellow">PORTFOLIO</strong><br/> Lauries Welding Group Gallery</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myCarousel" className="carousel slide portfolio_Carousel " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption ">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf1.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf2.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf3.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf4.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <a className="read_more" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf1.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf2.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf3.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf4.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
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
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf1.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf2.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf3.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="portfolio_img">
                                            <img src="images/potf4.jpg" alt="#" />
                                            <div className="middle">
                                            <div className="text2">View More</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
            {/* ----------------- */}
            </div>
        </div>
        <Footer/>
    </>
  )
}
