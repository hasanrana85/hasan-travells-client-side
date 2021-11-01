import React from 'react';
import './OrderTable';


const update = {status:"approved"};



const OrderTable = (props) => {
    const {_id, name, email, phone, country, status} = props.order;

    // Update Status
    // const handleUpdateStatus = email =>{
    //     const url = `http://localhost:5000/visitor/${email}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(update)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
            
    //     })
    // }


    // Delete a visitor
    const handleDeleteVisitor = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://gruesome-spell-64499.herokuapp.com/visitor/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                
            }
        })
        }
    };
    return (
        
            
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{country}</td>
                    <td>
                        <button className="btn btn-success">{status}</button>
                    </td>
                    <td>
                        <button onClick={() =>handleDeleteVisitor(props.order._id)} className="btn btn-danger border-3">Delete</button>
                    </td>
                </tr>
            
        
    );
};

export default OrderTable;