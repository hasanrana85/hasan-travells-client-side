import React from 'react';
import './OrderTable';

const OrderTable = (props) => {
    const {_id, name, email, phone, country, visitingCountry} = props.order;

    // Delete a visitor
    const handleDeleteVisitor = id =>{
        const url = `http://localhost:5000/visitor/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                
            }
        })
    };
    return (
        
            
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{country}</td>
                    <td>{visitingCountry}</td>
                    <td>
                        <button onClick={() =>handleDeleteVisitor(props.order._id)} className="btn btn-danger border-3">Delete</button>
                    </td>
                </tr>
            
        
    );
};

export default OrderTable;