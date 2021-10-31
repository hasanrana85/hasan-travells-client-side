import React from 'react';
import './About.css';
import about1 from '../../images/about/about1.png';
import about2 from '../../images/about/about2.png';
import about3 from '../../images/about/about3.jpg';
import guide1 from '../../images/about/guide1.png';
import guide2 from '../../images/about/guide2.png';
import guide3 from '../../images/about/guide3.png';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="w-50 mx-auto">
                <p className="text-danger fw-bold">About Hasan Travel</p>
                <h1>About Us</h1>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="about_back">
                        <img className="about_image" src={about1} alt="" />
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="about_back2">
                                <img className="about_image2" src={about2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="about_back3">
                                <img className="about_image3" src={about3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div>
                        <h1 className="text-start mb-5">The Best Travel Agency Company.</h1>
                        <p className="text-start">Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="text-start">
                                <h6>Donec Viverra Orci On A</h6>
                                
                                <h6>Donec Viverra Orci On A</h6>
                               
                                <h6>Donec Viverra Orci On A</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div>
                                <h6>Donec Viverra Orci On A</h6>
                               
                                <h6>Donec Viverra Orci On A</h6>
                              
                                <h6>Donec Viverra Orci On A</h6>
                            </div>
                        </div>
                        <button className="about_btn">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="mb-5">
                    <p className="text-start">Tour Guide</p>
                    <h1 className="text-start">All Guide Are 5 Year <br /> Expart In Travel</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div>
                        <img className="guide1" src={guide1} alt="" />
                    </div>
                    <div className="mt-3">
                        <h4>Shakura Chen</h4>
                        <h6>Tour Guide</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div>
                        <img className="guide1" src={guide2} alt="" />
                    </div>
                    <div className="mt-3">
                        <h4>Shakura Chen</h4>
                        <h6>Tour Guide</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div>
                        <img className="guide1" src={guide3} alt="" />
                    </div>
                    <div className="mt-3">
                        <h4>Shakura Chen</h4>
                        <h6>Tour Guide</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;