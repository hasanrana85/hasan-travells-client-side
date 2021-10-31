import React from 'react';
import Banner from '../Banner/Banner';
import Offering from '../Offering/Offering';
import Review from '../Review/Review';
import WhyChoose from '../WhyChoose/WhyChoose';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offering></Offering>
            <WhyChoose></WhyChoose>
            <Review></Review>
        </div>
    );
};

export default Home;