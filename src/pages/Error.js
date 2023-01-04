import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Error = props => {
    useEffect(() => {
        document.title = "Error";
    }, []);
    return (
        <>

            <section class="error-404">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 text-center">
                            <div class="page-content">
                                <h1>404</h1>
                                <h2>Sorry! Page Not Found!</h2>
                                <p>Oops! The page you are looking for does not exist. Please return to the site’s homepage.</p>

                                <div class="ot-button">
                                    <Link to={'/'} class="octf-btn octf-btn-light no-line">TAKE ME HOME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default Error;
