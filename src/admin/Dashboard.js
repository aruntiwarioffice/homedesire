import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
    useEffect(() => {
        document.title = "Dashboard";  
      }, []);
	return(
		<>

<section className='section'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12 text-center'>
                    <div className='page-content'>
                        <h2>Dashboard</h2>
                    </div>
                    <form  method="post" action="" className='wpcf7'>
                                <div className='main-form'>
                                    <div className=''>

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

export default Dashboard;
