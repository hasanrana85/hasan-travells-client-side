import React, { useEffect, useRef, useState } from 'react';
import './OrderDetails.css';
import details from '../../images/offering/offering1.png';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderDetails = () => {
    const [service, setService] = useState({});
    const {serviceId} = useParams();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const countryRef = useRef();
    const messageRef = useRef();
    const visitingCountryRef = useRef();
    const {user} = useAuth();
    useEffect( () =>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, []);

    const handleAddOrder = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const country = countryRef.current.value;
        const message = messageRef.current.value;
        const visitingCountry = visitingCountryRef.current.value;
        const status = "panding";
        const newVisitor = {name, email, phone, country, message, visitingCountry, status}

        // send data to the server
        fetch('http://localhost:5000/visitor',{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVisitor)
        })
        .then()

        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        countryRef.current.value = "";
        messageRef.current.value = "";
        visitingCountryRef.current.value = "";
        
        e.preventDefault();
    }
    
    return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="detail_border">
                            <img className="details_image" src={service.image} alt="" />
                        </div>
                        <div className="mt-5 text-start">
                            <h3>Western Express Northbound </h3>
                            <br />
                            <p>{service.name} </p>
                            <p className="text-danger fs-6 fw-bold">{service.price}</p>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <h5>{service.name}</h5>
                                <p>Daily Tour</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <h5>Tour Type</h5>
                                <p>4 days</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <h5>Group Size</h5>
                                <p>30 People</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <h5>Languages</h5>
                                <p>Any Language</p>
                            </div>
                        </div>
                        <hr />
                        <p>{service.description}</p>
                        <div className="row my-5">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <div className="information">
                                    <h5>Information</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <div className="plan">
                                    <h5>Travel Plan</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                <div className="plan">
                                    <h5>Our Gallery</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-3"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="details_form">
                            <h3 className="mb-3 fw-blod">Book This Package</h3>
                            <form onSubmit={handleAddOrder}>
                                <div>
                                    <input ref={nameRef} className="form-control" type="text" name="" id="" placeholder="Your Full Name" value={user.displayName} />
                                </div>
                                <br />
                                <div>
                                    <input ref={emailRef} className="form-control" type="email" name="" id="" placeholder="Your Email" value={user.email}/>
                                </div>
                                <br />
                                <div>
                                    <input ref={phoneRef} className="form-control" type="phone" name="" id="" placeholder="Your phone" />
                                </div>
                                <br />
                                <div>
                                    <input ref={countryRef} className="form-control" type="text" name="" id="" placeholder="Your Country" />
                                </div>
                                <br />
                                <div>
                                    <input ref={visitingCountryRef} className="form-control" type="text" name="" id="" placeholder="Your visiting Country" />
                                </div>
                                <br />
                                <div>
                                    <textarea ref={messageRef} className="form-control" name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <br />
                                <div>
                                    <input type="submit" value="Order Now" className="btn btn-secondary btn-block form-control py-2 fw-bold fs-4 text-uppercase" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default OrderDetails;