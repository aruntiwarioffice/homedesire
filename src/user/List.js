import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import aboutimage from '../images/image1-aboutus.png';
import loginimage from '../images/login.svg';
const UserList = props => {

    useEffect(() => {
        document.title = "UserList";
    }, []);

    return (
        <>
            <div id='content' className='site-content'>
                <div className='page-header dtable text-center header-transparent pheader-about'>
                    <div className='dcell'>
                        <div className='container'>
                            <h1 className='page-title'>User List</h1>
                            <ul id='breadcrumbs' className='breadcrumbs none-style'>
                                <li><Link to='/'>Home</Link></li>
                                <li className='active'>User List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className='section'>
                <div className='container'>
                    <div className='row justify-content-center item-center'>
                        <div className='col-lg-6 text-center'>

                            <form className='wpcf7'>
                                <div className='main-form'>
                                    <div className='form-group'>

                                        <input type="email" className='' id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className='form-group'>

                                        <input type="password" className='' id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>

                                    <button type="submit" class='btn octf-btn'>Login</button>
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

export default UserList;
