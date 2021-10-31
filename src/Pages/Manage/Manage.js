import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Manage.css';

const Manage = () => {
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
    return (
        <div className="add-service mt-5">
            <h1 className="mb-5">Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
            <textarea {...register("description")} placeholder="description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("image")} placeholder="image url" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default Manage;