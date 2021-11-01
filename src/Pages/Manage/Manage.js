import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Manage.css';

import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderTable from '../OrderTable/OrderTable';

const Manage = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/service', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    useEffect( () => {
        fetch('http://localhost:5000/visitor')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    
    return (

        
        
        <div className="add-service mt-5">

            <div className="container">
                <h1 className="text-primary mb-5">Order Summary</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>country</th>
                        <th>Status</th>
                        <th>manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderTable
                            key = {order.email}
                            order = {order}
                            ></OrderTable>)
                        }
                        
                    </tbody>
                </Table>
            </div>

            <div className="mt-5 pt-5">
                <h1 className="mb-5">Please Add a Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("image")} placeholder="image url" />
                <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Manage;