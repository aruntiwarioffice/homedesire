import React, { useEffect } from 'react';

const PropertyPage = props => {
    useEffect(() => {
        document.title = "Property";
    }, []);
    return (
        <>

            <section className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="page-content">
                                <h1>Property</h1>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default PropertyPage;
