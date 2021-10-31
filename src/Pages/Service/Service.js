import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, name, price, description, image} = props.service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 mb-5 border p-3">
            <img className="w-100 services rounded-3" src={image} alt="" />
            <h3 className="fw-bold text-danger">{name}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <Link to={`/orderDetails/${_id}`}>
            <button className="btn btn-primary fw-bold">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;<h1>This is Service page</h1>