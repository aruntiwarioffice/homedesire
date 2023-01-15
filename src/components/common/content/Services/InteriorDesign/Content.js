import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutimage from '../../../css/images/page-header/pheader-single-portfolio.jpg';
import featured1 from '../../../css/images/Untitled-design-5.png';
import featured2 from '../../../css/images/Untitled-design-6.png';
import featured3 from '../../../css/images/Untitled-design-7.png';
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
                                    <h2 class="main-heading">Provide services to fulfill customers desire in terms of property buy, sell &amp; rent</h2>
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
                                            <h5><a href="#" class="title-link">High quality interior design with low cost</a></h5>
                                            
                                        </div>
                                    </div>
                                    <div class="d-none d-md-block space-70"></div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-0">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-measure"></span></div>
                                        <div class="content-box">
                                            <h5><a href="#" class="title-link">Dedicated interior architect align with customer</a></h5>
                                            
                                        </div>
                                    </div>
                                    <div class="d-none d-md-block space-70"></div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-5 mb-md-0">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-home"></span></div>
                                        <div class="content-box">
                                            <h5><a href="#" class="title-link">Full support after completion of work</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="icon-box icon-box--classic icon-box--icon-top s-light">
                                        <div class="icon-main"><span class="ot-flaticon-house"></span></div>
                                        <div class="content-box">
                                            <h5><a href="#" class="title-link">Experienced team</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</section>
  );
};

export default InteriorDesignContent;
