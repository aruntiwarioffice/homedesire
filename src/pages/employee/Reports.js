import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reports = props => {

    useEffect(() => {
        document.title = "Reports";
    }, []);

    return (
        <>
            <section>
                <div className='container'>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success">
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Users</h6>
                                    <h1 className="display-4">134</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Posts</h6>
                                    <h1 className="display-4">87</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fa fa-twitter fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Tweets</h6>
                                    <h1 className="display-4">125</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Shares</h6>
                                    <h1 className="display-4">36</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="thead-inverse">
                                    <tr>
                                        <th>#</th>
                                        <th>Label</th>
                                        <th>Header</th>
                                        <th>Column</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>responsive</td>
                                        <td>bootstrap</td>
                                        <td>cards</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>rwd</td>
                                        <td>web designers</td>
                                        <td>theme</td>
                                        <td>responsive</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>free</td>
                                        <td>open-source</td>
                                        <td>download</td>
                                        <td>template</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>frontend</td>
                                        <td>developer</td>
                                        <td>coding</td>
                                        <td>card panel</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>mobile-first</td>
                                        <td>design</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>navbar</td>
                                        <td>sticky</td>
                                        <td>jumbtron</td>
                                        <td>header</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>collapse</td>
                                        <td>affix</td>
                                        <td>submenu</td>
                                        <td>flexbox</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>layout</td>
                                        <td>examples</td>
                                        <td>themes</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>flexbox</td>
                                        <td>design</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>

                </div>

            </section>
        </>

    );
};

export default Reports;
