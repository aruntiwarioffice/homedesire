import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Help = props => {

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <>
            <div id='content' className='site-content'>
                <div className='page-header dtable text-center header-transparent pheader-about'>
                    <div className='dcell'>
                        <div className='container'>
                            <h1 className='page-title'>Help</h1>
                            <ul id='breadcrumbs' className='breadcrumbs none-style'>
                                <li><Link to='/'>Home</Link></li>
                                <li className='active'>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           



        </>

    );
};

export default Help;
