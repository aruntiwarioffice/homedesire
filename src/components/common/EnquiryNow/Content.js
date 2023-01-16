import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import featured2 from '../Style/images/Untitled-design-6.png';
const InteriorDesignContent = () => {
  return (
    <section className={classes}>
     
   

        <section className='section enq'>
            <div className='elementor-background-overlay'></div>
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
