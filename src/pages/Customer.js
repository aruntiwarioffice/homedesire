import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Customer = props => {

    useEffect(() => {
        document.title = "Customer";
    }, []);


    return (
        <>
            <div className='site-content'>
                <div className='page-header dtable text-center header-transparent page-header-contact'>
                    <div className='dcell'>
                        <div className='container'>
                            <h1 className='page-title'>Customer</h1>
                            <ul id='breadcrumbs' className='breadcrumbs none-style'>
                                <li><Link exact to='/'>Home</Link></li>
                                <li className='active'>Customer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className='section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-12 text-center'>

                            <form className='wpcf7'>
                                <div className='main-form'>
                                    <div className='row mb-3 mt-3'>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type="text" className='' id="name" placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <div className='row  mb-3 mt-3'>
                                        <div className='col-md-12 justify-content-center'>
                                            <button type="submit" class='btn octf-btn'>Submit</button>
                                        </div>
                                    </div>




                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default Customer;
