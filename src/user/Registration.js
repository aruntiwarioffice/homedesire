import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginimage from '../images/login.svg';
const Registration = props => {

    useEffect(() => {
        document.title = "Register";
    }, []);


    return (
        <>

            <div className='site-content'>
                <div className='page-header dtable text-center header-transparent page-header-contact'>
                    <div className='dcell'>
                        <div className='container'>
                            <h1 className='page-title'>Register</h1>
                            <ul id='breadcrumbs' className='breadcrumbs none-style'>
                                <li><Link exact to='/'>Home</Link></li>
                                <li className='active'>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className='section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 text-center'>

                            <form className='wpcf7'>
                                <div className='main-form'>
                                    <div className='row mb-3 mt-3'>
                                        <div className='col-md-12 mb-2 mt-2'>
                                            <label>Email</label>
                                            <input type="email" className='' id="email" placeholder="Enter Your Email" name="email" />
                                        </div>
                                        <div className='col-md-12 mb-2 mt-2'>
                                            <label>Password</label>
                                            <input type="password" className='' id="password" placeholder="Enter Password" name="password" />
                                        </div>
                                        <div className='col-md-12 mb-2 mt-2'>
                                            <label>Re-password</label>
                                            <input type="password" className='' id="repassword" placeholder="Re-enter Password" name="repassword" />
                                        </div>
                                        <div className='col-md-12 mb-2 mt-2'>
                                            <label>Name</label>
                                            <input type="text" className='' id="name" placeholder="Enter Your Name" name="name" />
                                        </div>
                                        <div className='col-md-12 mb-3 mt-3'>
                                            <label>Contact Number</label>
                                            <input type="number" className='' id="number" placeholder="Enter Contact Number" name="number" />
                                        </div>
                                        <div className='col-md-12 mb-3 mt-3'>
                                            <label>Select Your State</label>
                                            <select className='form-control'>
                                                <option>Select Your State</option>
                                                <option>Uttar pradesh</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-12 justify-content-center'>
                                            <button type="submit" class='btn octf-btn'>Register Now</button>
                                        </div>
                                    </div>




                                </div>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <img src={loginimage} alt='' />
                        </div>
                    </div>
                </div>
            </section>




        </>

    );
};

export default Registration;
