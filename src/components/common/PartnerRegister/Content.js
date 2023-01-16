import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
const ContactUsContent = () => {
  return (
    <section className={classes.starting}>
      <div className="site-content">
                <div className="page-header dtable text-center header-transparent page-header-contact partner-page" >
                    <div className="dcell">
                    <div className='container'>
                            <h1 className='page-title'>Partner Register</h1>
                            <ul id='breadcrumbs' className='breadcrumbs none-style'>
                                <li><Link exact to='/'>Home</Link></li>
                                <li className='active'>Partner Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className='section'>
                <div className='container'>
                    <div className='row justify-content-center item-center'>
                        <div className='col-lg-12'>
                        <div class="section-title line-style no-margin personal_info">
							<h3 class="title">Personal Info</h3>
						</div>
                            <form className='wpcf7'>
                                <div className='main-form row'>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">First Name</label>
                                            <input type="text" className='' id="FirstName" placeholder="First Name" name="FirstName" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Last Name</label>
                                            <input type="text" className='' id="LastName" placeholder="Last Name" name="LastName" />
                                        </div>
                                    </div>
                                     <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Phone Number</label>
                                            <input type="text" className='' id="PhoneNumber" placeholder="Phone Number" name="PhoneNumber" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Email</label>
                                            <input type="email" className='' id="Email" placeholder="Email" name="Email" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Comapay Name</label>
                                            <input type="text" className='' id="ComapayName" placeholder="Comapay Name" name="ComapayName" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Select Business Type</label>
                                            <select className='form-control'>
                                                <option value="">Select Business Type</option>
                                                <option value="">Property</option>
                                                <option value="">Interior Design</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">City</label>
                                            <input type="text" className='' id="City" placeholder="City" name="City" />
                                        </div>
                                    </div>
                                     <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Area</label>
                                            <input type="text" className='' id="Area" placeholder="Area" name="Area" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Password</label>
                                            <input type="password" className='' id="password" placeholder="Password" name="Password" />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <label class="label" for="customFile">Re Password</label>
                                            <input type="password" className='' id="repassword" placeholder="Re Password" name="repassword" />
                                        </div>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                         <label class="label" for="customFile">User Type</label>
                                            <select className='form-control'>
                                                <option value="0">User Type</option>
                                                <option value="Employee">Employee</option>
                                                <option value="Partner">Partner</option>
                                                <option value="Customer">Customer</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                        <label class="label" for="customFile">Picture of Agent</label>
                                            <input type="file" className='form-control' id="file" placeholder="Picture of Agent" name="file" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='form-group'>
                                            <textarea className='form-group' placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <button type="submit" class='btn octf-btn'>Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>

            
    </section>
  );
};

export default ContactUsContent;
