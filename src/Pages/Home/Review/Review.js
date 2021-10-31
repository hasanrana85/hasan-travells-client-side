import React from 'react';
import './Review.css';
import review1 from '../../../images/review/review1.png';
import review2 from '../../../images/review/review2.png';
import review3 from '../../../images/review/review3.png';

const Review = () => {
    return (
        <div className="container">
            <div className="w-50 mx-auto mb-5">
                <p className="text-danger fw-bold">Our Traveller Say</p>
                <h1>What Our Traveller Say <br /> About Us</h1>
            </div>
            <div className="row my-5">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="review">
                        <div className="review_back">
                            <img className="review_image" src={review1} alt="" />
                        </div>
                        <div className="review_content">
                            <h1>Shaon Pull</h1>
                            <h4>Traveller</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi. adipisicing elit. Aperiam, eligendi</p>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="review">
                        <div className="review_back">
                            <img className="review_image" src={review2} alt="" />
                        </div>
                        <div className="review_content">
                            <h1>Dina Jems</h1>
                            <h4>Traveller</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi. adipisicing elit. Aperiam, eligendi</p>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="review">
                        <div className="review_back">
                            <img className="review_image" src={review3} alt="" />
                        </div>
                        <div className="review_content">
                            <h1>Jahid Hasan</h1>
                            <h4>Traveller</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi. adipisicing elit. Aperiam, eligendi</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;