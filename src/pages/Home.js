import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/slider/slider2-home2.jpg';
import image2 from '../images/slider/slider2-home1-1.jpg';
import image3 from '../images/slider/slider1-home2.jpg';
import aboutImage from '../images/image1-home3.png';
import aboutimage2 from '../images/image1-aboutus.png';
import service1 from '../images/cate1.jpg';
import service2 from '../images/cate2.jpg';
import service3 from '../images/cate3.jpg';
import home2 from '../images/image3-home1.png';


const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);


    return (
        <>

            <div className="homeslider">

                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} alt="Los Angeles" />
                            <div className="carousel-caption">
                                <h3>Shaurbh</h3>
                                <p>We had such a great time in LA!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={image2} alt="Chicago" />
                            <div className="carousel-caption">
                                <h3>Chicago</h3>
                                <p>Thank you, Chicago!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={image3} alt="New York" />
                            <div className="carousel-caption">
                                <h3>New York</h3>
                                <p>We love the Big Apple!</p>
                            </div>
                        </div>
                    </div>
                    <div class="banner-desc-1">
                        <ul>
                            <li><a href="#"><span>pinterest</span></a></li>
                            <li><a href="#"><span>twitter</span></a></li>
                            <li><a href="#"><span>facebook</span></a></li>
                            <li><a href="#"><span>instagram</span></a></li>
                        </ul>
                    </div>
                    <div className="carousel-control">
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>

            </div>

            <section className="about-3 p-xl-0 pb-sm-0">
                <div className="grid-lines grid-lines-vertical">
                    <span className="g-line-vertical line-left color-line-default"></span>
                    <span className="g-line-vertical line-right color-line-default"></span>
                </div>
                <div class="container">
                    <div class="row">
                        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 align-self-center">
                            <div className="about-img-3">
                                <img src={aboutImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="about-content-3 ml-xl-70">
                                <div className="ot-heading is-dots">
                                    <span>[ main principes ]</span>
                                    <h2 className="main-heading">A Sketch of Each Detail</h2>
                                </div>
                                <div className="space-20"></div>
                                <div className="space-5"></div>
                                <p>The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.</p>
                                <div className="space-20"></div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 mb-5 mb-md-0">
                                        <div className="icon-box icon-box--classic icon-box--icon-top pr-4">

                                            <div className="content-box">
                                                <h5>3D Visualization</h5>
                                                <p>3D sketch of each detail of your future interior.</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="icon-box icon-box--classic icon-box--icon-top">

                                            <div className="content-box">
                                                <h5>Individual Project</h5>
                                                <p>The basic philosophy of  studio is to create individual design.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-company">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-self-center text-center mb-5 mb-lg-0">
                            <div className="about-img">
                                <img src={aboutimage2} alt="" />
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

                                    <Link to={'/about'} className="octf-btn octf-btn-dark border-hover-dark">View Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 px-0">
                            <div className="cate-lines h-light">
                                <div className="cate-item">
                                    <Link to={'/enquiry-now'}>
                                        <img src={service1} alt="" />
                                    </Link>
                                    <div className="cate-item_content">
                                        <Link to={'/enquiry-now'} ><h2>Office Spaces<span className="number-stroke">01</span></h2></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-0">
                            <div className="cate-lines h-light">
                                <div className="cate-item">
                                    <Link to={'/enquiry-now'}>
                                        <img src={service2} alt="" />
                                    </Link>
                                    <div className="cate-item_content">
                                        <Link to={'/enquiry-now'}><h2>Public Spaces<span className="number-stroke">02</span></h2></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-0">
                            <div className="cate-lines s-dark">
                                <div className="cate-item">
                                    <Link to={'/enquiry-now'}>
                                        <img src={service3} alt="" />
                                    </Link>
                                    <div className="cate-item_content">
                                        <Link to={'/enquiry-now'}><h2>Residential Spaces<span className="number-stroke">03</span></h2></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <h5>Design &amp; Planning</h5>
                                    <p>We will help you to get the result you dreamed of.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-2 text-center mb-30">
                                <div className="icon-main"><img src="images/iconbox2.png" alt="" /></div>
                                <div className="content-box">
                                    <h5>Custom Solutions</h5>
                                    <p>Individual, aesthetically stunning solutions for customers.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-3 text-center mb-30">
                                <div className="icon-main"><img src="images/iconbox3.png" alt="" /></div>
                                <div className="content-box">
                                    <h5>Furniture &amp; Decor</h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-4 text-center mb-30 mb-lg-0">
                                <div className="icon-main"><img src="images/iconbox4.png" alt="" /></div>
                                <div className="content-box">
                                    <h5>Furniture &amp; Decor</h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-5 text-center mb-30 mb-md-0">
                                <div className="icon-main"><img src="images/iconbox5.png" alt="" /></div>
                                <div className="content-box">
                                    <h5>Furniture &amp; Decor</h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-6 text-center  mb-30 mb-md-0">
                                <div className="icon-main"><img src="images/iconbox6.png" alt="" /></div>
                                <div className="content-box">
                                    <h5>Furniture &amp; Decor</h5>
                                    <p>We create and produce our product design lines.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="skill-1">
                <div className="grid-lines grid-lines-vertical">
                    <span className="g-line-vertical line-left color-line-default"></span>
                    <span className="g-line-vertical line-center color-line-default"></span>
                    <span className="g-line-vertical line-right color-line-default"></span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="skill-content-1 mr-xl-70">
                                <div className="ot-heading is-dots">
                                    <span>[ our skills ]</span>
                                    <h2 className="main-heading">The Core Company Values</h2>
                                </div>
                                <div className="space-20"></div>
                                <div className="space-5"></div>
                                <p>We are constantly growing, learning, and improving and our partners are steadily increasing. 200 projects is a sizable number.</p>
                                <div className="space-10"></div>
                                <div className="ot-progress pb-3" data-percent="65" data-processed="true">
                                    <div className="overflow">
                                        <span className="pname f-left">interior sketch</span>
                                    </div>
                                    <div className="iprogress">
                                        <div className="progress-bar" style={{ width: "325px" }}><span className="ppercent">65%</span></div>
                                    </div>
                                </div>
                                <div className="ot-progress pb-3" data-percent="85" data-processed="true">
                                    <div className="overflow"><span className="pname f-left">3D Modeling</span></div>
                                    <div className="iprogress">
                                        <div className="progress-bar" style={{ width: "425px" }}><span className="ppercent">85%</span></div>
                                    </div>
                                </div>
                                <div className="ot-progress pb-3" data-percent="55" data-processed="true">
                                    <div className="overflow"><span className="pname f-left">2D Planning</span></div>
                                    <div className="iprogress">
                                        <div className="progress-bar" style={{ width: "275px" }}><span className="ppercent">55%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 align-self-center">
                            <div className="skill-img-1">
                                <img src={home2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Home;
