import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Offering.css';

const Offering = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then( data => setServices(data));
    }, []);
    return (
        <div className="container mt-5">
            <div className="w-50 mx-auto">
                <p className="text-danger fw-bold">Choose Your Package</p>
                <h1>Select Your Best Package <br /> For Your Travel</h1>
            </div>
            <div className="row mt-5">
                    {
                    services.slice(0, 6).map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)    
                    }
            </div>
        </div>
    );
};

export default Offering;