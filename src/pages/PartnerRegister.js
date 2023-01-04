import React, { useEffect } from 'react';

const PartnerRegister = props => {
    useEffect(() => {
        document.title = "Partner Register";
    }, []);
    return (
        <>

            <section className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="page-content">
                                <h1>Partner Register</h1>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default PartnerRegister;
