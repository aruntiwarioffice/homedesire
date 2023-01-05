import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutimage from '../../images/image1-aboutus.png';


const About = props => {

    useEffect(() => {
        document.title = "About Us";
    }, []);

    return (

        <>
            <div className="site-content">
                <div className="page-header dtable text-center header-transparent pheader-about">
                    <div className="dcell">
                        <div className="container">
                            <h1 className="page-title">About Us</h1>
                            <ul id="breadcrumbs" className="breadcrumbs none-style">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about-company">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-self-center text-center mb-5 mb-lg-0">
                            <div className="about-img">
                                <img src={aboutimage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="about-detail">
                                <div className="ot-heading is-dots">
                                    <span>[ about company ]</span>
                                    <h2 className="main-heading">Best Interior Solutions</h2>
                                </div>
                                <p>The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles and architecture. Even if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed of.</p>
                                <div className="ot-button">
                                    <a href="portfolio-masonry.html" className="octf-btn octf-btn-dark border-hover-dark">View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-3">
                <div className="grid-lines-vertical">
                    <span className="g-line-vertical line-left color-line-default"></span>
                    <span className="g-line-vertical line-right color-line-default"></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center theratio-align-center">
                            <div className="ot-heading is-dots">
                                <span>[ OUR SERVICES ]</span>
                                <h2 className="main-heading">What Can We Offer</h2>
                            </div>
                            <div className="space-50"></div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-1 text-center mb-30">
                                <div className="icon-main"><img src="images/iconbox1.2.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Design &amp; Planning</a></h5>
                                    <p>We will help you to get the result you dreamed of.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-2 text-center mb-30">
                                <div className="icon-main"><img src="images/iconbox2.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Custom Solutions</a></h5>
                                    <p>Individual, aesthetically stunning solutions for customers.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-3 text-center mb-30">
                                <div className="icon-main"><img src="images/iconbox3.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Furniture &amp; Decor</a></h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-4 text-center mb-30 mb-lg-0">
                                <div className="icon-main"><img src="images/iconbox4.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Furniture &amp; Decor</a></h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-5 text-center mb-30 mb-md-0">
                                <div className="icon-main"><img src="images/iconbox5.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Furniture &amp; Decor</a></h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-6 text-center  mb-30 mb-md-0">
                                <div className="icon-main"><img src="images/iconbox6.png" alt="" /></div>
                                <div className="content-box">
                                    <h5><a href="servcies-detail-1.html">Furniture &amp; Decor</a></h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>
                                <div className="link-box">
                                    <a href="servcies-detail-1.html" className="btn-details">READ MORE</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </>

    );
};

export default About;
