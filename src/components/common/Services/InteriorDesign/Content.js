import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutimage from '../../Style/images/page-header/pheader-single-portfolio.jpg';
import featured1 from '../../Style/images/Untitled-design-5.png';
import featured2 from '../../Style/images/Untitled-design-6.png';
import featured3 from '../../Style/images/Untitled-design-7.png';
import table from '../../Style/images/Untitled-design-9.png';
import table2 from '../../Style/images/Untitled-design-14.png';
import hand from '../../Style/images/Untitled-design-13.png';
import hand2 from '../../Style/images/Untitled-design-11.png';
const InteriorDesignContent = () => {
  return (
    <section className={classes}>
      <div id="content" class="site-content">
            <div  class="rev_slider_wrapper fullscreen-container">
              <img src={aboutimage} alt='' />
            </div>
        </div>
   

<section class="bg-black section">
<div class="container">
    <div class="row mt-xl--40 justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div class="ot-features-box max-w-350 mx-auto">
                <div class="features-image">
                    <a href="#">
                        <span class="overlay flex-middle"><i class="ot-flaticon-add"></i></span>
                        <img src={featured1} alt=""/>
                    </a>                
                </div>
                <div class="features-content">
                    <h6><a href="#"><span>01.</span>HOME INTERIOR</a></h6>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div class="ot-features-box max-w-350 mx-auto">
                <div class="features-image">
                    <a href="#">
                        <span class="overlay flex-middle"><i class="ot-flaticon-add"></i></span>
                        <img src={featured2} alt=""/>
                    </a>                
                </div>
                <div class="features-content">
                    <h6><a href="#"><span>02.</span>OFFICE INTERIOR</a></h6>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div class="ot-features-box max-w-350 mx-auto">
                <div class="features-image">
                    <a href="#">
                        <span class="overlay flex-middle"><i class="ot-flaticon-add"></i></span>
                        <img src={featured3} alt=""/>
                    </a>                
                </div>
                <div class="features-content">
                    <h6><a href="#"><span>03.</span> COMMERCIAL INTERIOR</a></h6>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section className='our-portfolio-1 portfoliobg'>
  <div className='elementor-background-overlay'></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-5 mb-lg-0">
                            <div class="benefits-desc-1">
                                <div class="ot-heading">
                                    <span>[ our benefits ]</span>
                                    <h2 class="main-heading f2">Provide services to fulfill customers desire in terms of property buy, sell &amp; rent</h2>
                                </div>
                                <div class="ot-button">
                                    <a href="portfolio-masonry.html" class="octf-btn octf-btn-light border-hover-light">Query Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-0">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-sphere"></span></div>
                                        <div class="content-box">
                                            <img src={table} alt="" />
                                            <h5><a href="#" class="title-link">High quality interior design with low cost</a></h5>
                                            
                                        </div>
                                    </div>
                                    <div class="d-none d-md-block space-70"></div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-0">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-measure"></span></div>
                                        <div class="content-box">
                                        <img src={table2} alt="" />
                                            <h5><a href="#" class="title-link">Dedicated interior architect align with customer</a></h5>
                                            
                                        </div>
                                    </div>
                                    <div class="d-none d-md-block space-70"></div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-0">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-home"></span></div>
                                        <div class="content-box">
                                        <img src={hand} alt="" />
                                            <h5><a href="#" class="title-link">Full support after completion of work</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-house"></span></div>
                                        <div class="content-box">
                                        <img src={hand2} alt="" />
                                            <h5><a href="#" class="title-link">Experienced team</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="progress-studio">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-center mb-5 mb-xl-0">
                        <div class="circle-progress tbottom text-light" data-color="#939393" data-height="2" data-size="165" data-processed="true">
                            <div class="inner-bar" data-percent="75"><span><span class="percent">75</span>%</span><canvas height="165" width="165"></canvas></div>
                            <h4>interior sketch</h4>
                            <p class="main-color-stext">All kinds of buildings in chematic or working design</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-center mb-5 mb-xl-0">
                        <div class="circle-progress tbottom text-light" data-color="#939393" data-height="2" data-size="165" data-processed="true">
                            <div class="inner-bar" data-percent="50"><span><span class="percent">50</span>%</span><canvas height="165" width="165"></canvas></div>
                            <h4>3D MODELING</h4>
                            <p class="main-color-stext">Studio provides a full range of 3D interior modeling</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-center mb-5 mb-md-0">
                        <div class="circle-progress tbottom text-light" data-color="#939393" data-height="2" data-size="165" data-processed="true">
                            <div class="inner-bar" data-percent="75"><span><span class="percent">75</span>%</span><canvas height="165" width="165"></canvas></div>
                            <h4>ROOM MEASUREMENT</h4>
                            <p class="main-color-stext">Development of iperfect design of the project</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 text-center">
                        <div class="circle-progress tbottom text-light" data-color="#939393" data-height="2" data-size="165" data-processed="true">
                            <div class="inner-bar" data-percent="85"><span><span class="percent">85</span>%</span><canvas height="165" width="165"></canvas></div>
                            <h4>2D PLANNING</h4>
                            <p class="main-color-stext">We provide 2D planning for great visualization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section p100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="contact-left elementor-element-populated">
                        <div class="ot-heading is-dots">
                            <h2 class="main-heading">Share your query with us, we will accomplish hastle free</h2>
                        </div>
                                <form method="post" action="" className="wpcf7">
                                    <div className="main-form">
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input type="text" name="name" value="" size="40" className="" aria-invalid="false" placeholder="Name *" required="" />
                                        </div>
                                        <div className='form-group'>
                                            <label>Mobile No</label>
                                            <input type="text" name="name" value="" size="40" className="" aria-invalid="false" placeholder="Mobile No*" required="" />
                                        </div>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input type="email" name="Email" value="" size="40" className="" aria-invalid="false" placeholder="Email*" required="" />
                                        </div>
                                        <div className='form-group'>
                                            <label>Services</label>
                                            <select >
                                                <option value="Buy">Buy</option>
                                                <option value="Sell">Sell</option>
                                                <option value="Rent">Rent</option>
                                                <option value="Interior Design">Interior Design</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label>City</label>
                                            <select >
                                                <option value="Noida">Noida</option>
                                                <option value="Greater Noida">Greater Noida</option>
                                                <option value="Noida Extension">Noida Extension</option>
                                                <option value="Ghaziabad">Ghaziabad</option>
                                                <option value="Delhi ">Delhi </option>
                                                <option value="Gurugram">Gurugram</option>
                                                <option value="Faridabad">Faridabad</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label>Sector/Area</label>
                                            <input type="text" name="Email" value="" size="40" className="" aria-invalid="false" placeholder="Sector/Area*" required="" />
                                        </div>
                                        <div className='form-group'>
                                            <label>Query</label>
                                            <input type="text" name="Email" value="" size="40" className="" aria-invalid="false" placeholder="Query*" required="" />
                                        </div>
                                        
                                        <p><button type="submit" id="send" className="octf-btn">Send </button></p>
                                        
                                    </div>
                                </form>

                                
                            </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skill-img-2'>
                            <img src={featured2} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</section>
  );
};

export default InteriorDesignContent;
