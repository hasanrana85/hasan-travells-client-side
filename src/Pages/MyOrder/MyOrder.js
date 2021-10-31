
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderTable from '../OrderTable/OrderTable';
import './MyOrder.css';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/visitor')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    
    return (
        <div className="container mt-5">
            <h1 className="text-primary">Order Summary</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Phone</th>
                    <th>country</th>
                    <th>visiting country</th>
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
    );
};

export default MyOrder;