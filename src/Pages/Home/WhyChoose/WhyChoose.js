import React from 'react';
import './WhyChoose.css';
import choose1 from '../../../images/choose/handshake.png';
import choose2 from '../../../images/choose/woman.png';
import choose3 from '../../../images/choose/travelling.png';
import choose4 from '../../../images/choose/man.png';

const WhyChoose = () => {
    return (
        <div className="container my-5">
            <div className="w-50 mx-auto">
                <p className="text-danger fw-bold">Why Hasan Travel</p>
                <h1>Why You Are Travel With <br /> Hasan Travel</h1>
            </div>
            <div className="travelling m-5">
                <div className="travel_reason">
                    <img className="choose_image" src={choose2} alt="" />
                    <p className="text-white">2000+ Our worldwide <br /> guide</p>
                </div>
                <div className="travel_reason">
                    <img className="choose_image" src={choose1} alt="" />
                    <p className="text-white">100% trusted travel  <br /> agency</p>
                </div>
                <div className="travel_reason">
                    <img className="choose_image" src={choose3} alt="" />
                    <p className="text-white">10+ year of travel <br /> experience</p>
                </div>
                <div className="travel_reason">
                    <img className="choose_image" src={choose4} alt="" />
                    <p className="text-white">90% of our traveller <br /> happy</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;