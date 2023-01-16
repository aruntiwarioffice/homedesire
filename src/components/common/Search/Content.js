import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
const ContactUsContent = () => {
  return (
    <section className={classes.starting}>
      <div className="site-content">
                <div className="page-header dtable text-center header-transparent page-header-contact search-page" >
                    <div className="dcell">
                        <div className="container">
                            <div className='search-form'>
                                <h2 className='main-heading'>Search your desire property</h2>
                                <div className='searcher'>
                                    <div className=' wpcf7'>
                                            <div className='main-form row'>
                                                <div className='col-md-6'>
                                                    <input type="text" name="name" class="" placeholder="keywords" value=""/>
                                                </div>
                                                <div className='col-md-6'>
                                                    <select>
                                                        <option>Property Type</option>
                                                        <option>Duplex</option>
                                                        <option>House</option>
                                                        <option>Office</option>
                                                        <option>Retail</option>
                                                        <option>Vila</option>
                                                        <option>Flat</option>
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <select>
                                                        <option>Purpose</option>
                                                        <option>Buy</option>
                                                        <option>Sell</option>
                                                        <option>Rent</option>
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <input type="text" name="name" class="" placeholder="Address" value=""/>
                                                </div>
                                                <div class="col-md-12">
                                                    <div className='row p-slide-wrap'>
                                                        <div class="col-md-2">
                                                            <input type="text" class="ui-autocomplete-input" name="price_min" placeholder="Min" value="" autocomplete="off"/>
                                                        </div>
                                                        <div class="col-md-1 text-center">
                                                            <strong class="price-sep">₹</strong>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <input type="text" class="ui-autocomplete-input" name="price_max" placeholder="Max" value="" autocomplete="off"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            
    </section>
  );
};

export default ContactUsContent;
