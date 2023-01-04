import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import error from '../images/logo-404.svg';

const Enquiry = props => {

    useEffect(() => {
        document.title = "Enquiry";
    }, []);


    return (
        <>

            <section className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="page-content">
                                <h1>Enquiry</h1>
                                vsdvs

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default Enquiry;
