import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutimage from '../Style/images/Untitled-design-3.png';
import whychooseus from '../Style/images/Untitled-design-2.png';
import chooseimage from '../Style/images/Untitled-design-4.png';
const AboutUsContent = () => {
  return (
    <section className={classes.starting}>
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

            <section className="about-company section">
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
                                    <h2 className="main-heading">All Home Desire</h2>
                                </div>
                                <p>All Home Desire is a reputable real estate Platform. The firm specializes in offering customers 
                                  the most up-to-date construction and dealing information. In addition, we provide satisfying 
                                  interior design solutions and the best thing about us we provide both services at a reasonable cost.</p>

                                  <p>Besides being well equipped to meet all human needs, our facilities are surrounded 
                                    by international schools, transportation options, shopping centers, and gardens. <br/>We assist you
                                     with everything related to 
                                  property research, loans, investments, and EMI calculations.</p>

                                  <p>However, we are up to date with the upcoming trends in space management and help our 
                                    customers to design their spaces with cutting-edge designs.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-philosophy section">
        <div className="elementor-shape elementor-shape-top" data-negative="true">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path className="elementor-shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
</svg>		</div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 theratio-align-center text-center">
                        <div className="ot-heading is-dots">
                            <span>[ company strategy ]</span>
                            <h2 className="main-heading text-light">Our Philosophy</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5 mb-xl-0">
                      <div className="elementor-widget-container">
                        <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover text-center">
                          <div className="icon-main">
                            <span className="fa fa-home danger"></span>	        </div>
                          <div className="content-box">
                            <h5>Mission</h5>
                            <p>we understand the value of customer desire and for that, We deliver ultra edge services to our customers we work upon many aspects for client satisfaction our long-term mission is to make you happy in each and every manner.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5 mb-xl-0">
                      <div className="elementor-widget-container">
                          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover text-center">
                            <div className="icon-main">
                              <span className="fa fa-home danger"></span>	        </div>
                            <div className="content-box">
                              <h5>Vision</h5>
                              <p>Tp provide best services, consultancy and solutions to our valuable customer to fulfill their all home desire Our goal is to be a global leader in providing total home solutions, whether it's for your ideal home or your dream interior.</p>
                            </div>

                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
            <section className="section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-center theratio-align-center">
                        <div className="ot-heading is-dots">
                            <h2 className="main-heading">Why Choose Us?</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="process-classic">
                            <img src={chooseimage } className="icon-main" alt=""/>
                            <p className="px-md-5 px-lg-0">Provide services to fulfill customer desire in terms of property buy sell and rent</p>
                        </div>
                        <div className="process-classic">
                          <img src={chooseimage } className="icon-main" alt=""/>
                            <p className="px-md-5 px-lg-0">For our customers we offer a complete «key ready» project implementation.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <img src={whychooseus} alt=""/>
                    </div>
                    <div className="col-lg-4">
                        <div className="process-classic">
                        <img src={chooseimage } className="icon-main" alt=""/>
                            <p className="px-md-5 px-lg-0">The design of apartments, individual houses is one of the most difficult tasks.</p>
                        </div>
                        <div className="process-classic">
                        <img src={chooseimage } className="icon-main" alt=""/>
                            <p className="px-md-5 px-lg-0">For our customers we offer a complete «key ready» project implementation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       


    </section>
    
  );
};

export default AboutUsContent;
