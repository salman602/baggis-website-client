import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully.');
                    reset();
                }
            })


    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="Key" />
                <input {...register("name")} placeholder="Product Name" />
                <input {...register("description")} placeholder="Description about product" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;